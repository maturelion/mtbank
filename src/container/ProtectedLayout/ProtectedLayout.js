import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import { getUser } from '../../feature/user/UserActions';

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({}));
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedLayout