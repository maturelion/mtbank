import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
