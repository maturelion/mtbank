import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("isAuthenticated")
    ) {
      navigate("/");
    } else if (localStorage.getItem("token") !== null) {
      navigate("/checkpoint");
    }
  }, [navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
