import { useNotifications } from "./useNotifications";

const NotificationList = () => {
  const { notifications } = useNotifications();
  console.log({ notifications });
  return (
    <div>
      <h1>Notification List</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
