import { SignUpParams } from "@/types/services.types";
import supabase from "./supabase";

export async function handleSignUp({
  fullName,
  email,
  password,
  picture,
}: SignUpParams) {
  // First, we sign up the user with their email and password
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw new Error(authError.message);

  const userId = authData.user?.id;

  if (!userId) throw new Error("User ID not found");

  //   Next, we upload the user's profile picture to the storage bucket
  const avatarPath = `avatars/${userId}/${picture.name}`;

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(avatarPath, picture);

  if (uploadError) throw new Error(uploadError.message);

  const { data: avatarData } = supabase.storage
    .from("avatars")
    .getPublicUrl(avatarPath);

  if (!avatarData) throw new Error("Avatar URL not found");

  const avatarUrl = avatarData.publicUrl;

  //   Finally, we update the user table with their full name and avatar URL

  const { data: user, error: insertError } = await supabase
    .from("users")
    .insert({
      id: userId,
      email,
      full_name: fullName,
      avatar_url: avatarUrl,
    })
    .select()
    .single();

  if (insertError) {
    console.log(insertError, insertError?.message);
    throw new Error(insertError.message);
  }

  if (!authData.session) throw new Error("Authentication session not found");

  return { user, sessionUser: authData.session.user };
}

export async function handleLogIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const user = await supabase
    .from("users")
    .select()
    .eq("id", data.user.id)
    .single();

  return { user, sessionUser: data.session.user };
}

export async function getCurrentUserApi() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  const { data: user } = await supabase
    .from("users")
    .select()
    .eq("id", data.user.id)
    .single();

  return { user, sessionUser: data.user };
}
