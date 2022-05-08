import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user, admin } = useAuth();
  return (
    <div>
      {!admin ? (
        <div>
          <h3>Hello, {user?.displayName}</h3>
          <h6>
            You can Make Payment, Manage Your Orders and Submit Your Review form
            this DASHBOARD!
          </h6>
        </div>
      ) : (
        <div>
          <h3>Hello, {user?.displayName}, Your are admin</h3>
          <h6>
            You can Manage All Orders, Add A Product, Manage Products and Make
            New Admin form this DASHBOARD!
          </h6>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
