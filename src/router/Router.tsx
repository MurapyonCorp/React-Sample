import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { LoginUserProvider } from "../components/providers/LoginUserProvider";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/React-Sample" element={<Login />} />
        {/* <Route path="/home" element={<HeaderLayout /> }> */}
        <Route path="/React-Sample/home" element={<HeaderLayout /> }>
          {homeRoutes.map((route) => (
            <Route key={route.path} index={route.index} path={route.path} element={route.children} />
          ))}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  )
});