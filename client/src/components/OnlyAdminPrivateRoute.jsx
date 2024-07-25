import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

// check if the user is logged in using redux
export default function OnlyAdminPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
}
