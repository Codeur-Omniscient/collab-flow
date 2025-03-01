import supabase from "./supabase";

export async function getAllNotificationsApi(userId: string) {
  // Get all notifications for a user from the database

  const { data: notifications, error } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error("An error occurred while fetching notifications");

  return notifications;
}
