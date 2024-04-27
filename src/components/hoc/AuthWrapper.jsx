import React from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "../templates/PageWrapper";

function AuthWrapper() {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
}

export default AuthWrapper;
