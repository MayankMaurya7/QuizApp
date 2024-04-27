import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PATH_NAME } from "../configs/PathName";

const NavButton = ({ text, path }) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Button
      size="small"
      variant="contained"
      sx={{ width: "200px" }}
      onClick={() => navigate(path.replace(":id", params.id))}
    >
      {text}
    </Button>
  );
};

function NavBar() {
  return (
    <Stack
      direction="row"
      gap={2}
      padding={2}
      alignItems="center"
      justifyContent="flex-start"
    >
      <NavButton text={"Profile"} path={PATH_NAME.PROFILE} />
      <NavButton text={"Quiz List"} path={PATH_NAME.QUIZ_LIST} />
      <NavButton text={"Create Quiz"} path={PATH_NAME.CREATE_QUIZ} />
    </Stack>
  );
}

export default NavBar;
