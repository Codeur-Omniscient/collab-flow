import supabase from "./supabase";

export async function getAllInvitationsApi(userId: string) {
  const { data: invitations, error } = await supabase
    .from("project_members")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error("Failed to get invitations");

  return invitations;
}

export async function getInvitationApi(projectId: string, userId: string) {
  const { data: invitation, error } = await supabase
    .from("project_members")
    .select("*")
    .eq("project_id", projectId)
    .eq("user_id", userId)
    .single();

  if (error) throw new Error("Failed to get invitation");

  return invitation;
}

export async function inviteUserToProjectApi(
  projectId: string,
  email: string,
  senderId: string,
) {
  // Verifier si l'utilisateur existe

  const { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (userError || !user) throw new Error("User not found");

  // Vérifier s'il est déjà membre
  const { data: existingMember, error: projectError } = await supabase
    .from("project_members")
    .select("*")
    .eq("project_id", projectId)
    .eq("user_id", user.id)
    .single();

  if (projectError) {
    console.log(projectError.message);
  }

  if (existingMember) {
    throw new Error("Utilisateur déjà membre du projet");
  }

  //   Créer l'invitation

  const { error } = await supabase.from("invitations").insert({
    project_id: projectId,
    user_id: user.id,
    sender_id: senderId,
    invitation_status: "pending",
  });

  if (error) {
    console.log(error.message);
    throw new Error("Failed to invite user");
  }
}

export async function respondInvitationApi(
  projectId: string,
  userId: string,
  response: string,
) {
  const { error } = await supabase
    .from("invitations")
    .update({ invitation_status: response })
    .eq("project_id", projectId)
    .eq("user_id", userId);

  if (error) throw new Error("Failed to accept invitation");
}

export async function getInvitationDetailsApi(userId: string) {
  const { data: invitationDetails, error } = await supabase
    .from("invitations")
    .select(
      `
      id,
      projects (
        name as project_name,
        id as project_id
      )
      users (
        full_name as sender_name,
        email as sender_email,
        avatar_url as sender_avatar
      ),
      
    `,
    )
    .eq("user_id", userId)
    .eq("type", "project_invite")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return invitationDetails;
}
