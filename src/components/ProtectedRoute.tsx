import { useUser } from "@/features/auth/useUser";
import { useAuthStore } from "@/stores/auth/authStore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading, user } = useUser();
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (user) {
    setUser(user);
  }
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
