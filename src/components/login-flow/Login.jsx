import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { isEmail } from "../utils";
import { useNavigate } from "react-router-dom";
import { PATH_NAME } from "../configs/PathName";
import { setAllUserDataBase } from "../redux/slices/userManagement";

function Login() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state?.userData?.allUserDataBase);

  console.log("userList", userList);

  const checkCredentials = () => {
    // Loop through the allUserDataBase array
    for (let i = 0; i < userList?.length; i++) {
      const user = userList[i];
      // Check if the email and password match
      if (user.email === email && user.password === password) {
        return true; // Combination exists
      }
    }
    return false; // Combination doesn't exist
  };

  const toggleSignInSignUp = () => {
    setLogin(!login);
  };

  const addUserInDatabase = () => {
    if (checkCredentials()) {
      alert("User Already Exists");
    } else {
      const currentUser = {
        email,
        password,
        id: uuid(),
        quizList: [],
      };
      const updatedList = [...userList, currentUser];
      dispatch(setAllUserDataBase(updatedList));
      setLogin(true);
    }
  };
  const onSubmit = () => {
    if (login) {
      const check = checkCredentials();
      if (check) {
        navigate(PATH_NAME.PROFILE.replace(":id", email));
      } else {
        alert("Wrong Credentials");
      }
    } else {
      addUserInDatabase();
    }
  };

  const isValidInput = () => {
    if (isEmail(email) || password.trim() === "") {
      return true;
    }
    return false;
  };

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
      <Typography>{login ? "Login" : "Sign-Up"}</Typography>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        helperText={!isEmail(email) && "Invalid Email"}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="Email"
        autoFocus
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        helperText={password.trim() === "" && "Password cant be empty"}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValidInput()}
        onClick={() => onSubmit()}
      >
        {login ? "Sign In" : "Sign Up"}
      </Button>

      <Link href="#" variant="body2" onClick={() => toggleSignInSignUp()}>
        {login ? "Don't have an account? Sign Up" : "Have an account? Sign in"}
      </Link>
    </Stack>
  );
}

export default Login;
