import supabase from "@/services/supabase";
import { useAuthStore } from "@/stores/auth/authStore";
import { useEffect, useState } from "react";

// hooks/useNotifications.ts
interface Notification {
  content: string;
  created_at: string | null;
  id: string;
  is_read: boolean | null;
  project_id: string | null;
  sender_id: string | null;
  type: string;
  user_id: string;
}

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const currentUser = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!currentUser) return;

    // Récupérer les notifications initiales
    const fetchNotifications = async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", currentUser.id)
        .order("created_at", { ascending: false });

      console.log(data);
      if (error) console.error(error.message);
      if (data) setNotifications(data);
    };

    // Écoute en temps réel des nouvelles notifications
    const notificationSubscription = supabase
      .channel("notifications")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "notifications",
          filter: `user_id=eq.${currentUser.id}`,
        },
        (payload: { new: Notification }) => {
          setNotifications((prev) => [payload.new, ...prev]);
        },
      )
      .subscribe();

    fetchNotifications();

    return () => {
      supabase.removeChannel(notificationSubscription);
    };
  }, [currentUser]);

  // const markAsRead = async (notificationId: string) => {
  //   await supabase
  //     .from('notifications')
  //     .update({ is_read: true })
  //     .eq('id', notificationId);
  // };

  return notifications;
};
