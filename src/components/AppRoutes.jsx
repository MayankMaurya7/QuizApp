import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AuthWrapper from "./hoc/AuthWrapper";
import { PATH_NAME } from "./configs/PathName";
import Login from "./login-flow/Login";
import Profile from "./screens/profile/Profile";
import QuizCreate from "./screens/create-quiz";
import QuizList from "./screens/quiz-list";

function AppRoutes() {
  return (
    <Suspense fallback={<div />}>
      <React.Fragment>
        <Routes>
          <Route path={PATH_NAME.LOGIN} element={<Login />} />
          <Route path={PATH_NAME.ROOT} element={<Login />} />
          {/* <Route path={PATH_NAME.ROOT} element={<Navigate to={PATH_NAME.DASHBOARD} />} />
					<Route path={PATH_NAME.CUSTOMER_EXT_VIEW} element={<CustomerExternal />} /> */}
          <Route element={<AuthWrapper />}>
            <Route path={PATH_NAME.PROFILE} element={<Profile />} />
            <Route path={PATH_NAME.CREATE_QUIZ} element={<QuizCreate />} />
            <Route path={PATH_NAME.QUIZ_LIST} element={<QuizList />} />
          </Route>
        </Routes>
      </React.Fragment>
    </Suspense>
  );
}

export default AppRoutes;
