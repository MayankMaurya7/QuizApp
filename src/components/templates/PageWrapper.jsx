import React from "react";
import { Stack } from "@mui/material";
import NavBar from "../navbar/NavBar";

function PageWrapper(props) {
  const { children } = props;

  console.log({ children });

  return (
    <Stack direction="column">
      <NavBar />
      <Stack
        width="100%"
        sx={{ height: "calc(100vh - 52px)", overflow: "scroll" }}
      >
        {children}
      </Stack>
    </Stack>
  );
}

export default PageWrapper;
