import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Profile() {
  const userList = useSelector((state) => state?.userData?.allUserDataBase);
  const params = useParams();
  const currentUser = userList?.filter((item) => item?.email === params?.id);

  return (
    <Stack
      direction="column"
      gap={2}
      justifyContent="center"
      padding="20px"
      margin="auto"
      sx={{
        marginTop: "10%",
        border: "1px solid black",
        borderRadius: "4px",
        width: "50%",
      }}
    >
      <Typography>Email: {currentUser[0]?.email}</Typography>
      <Typography>Password: {currentUser[0]?.password}</Typography>
    </Stack>
  );
}

export default Profile;
