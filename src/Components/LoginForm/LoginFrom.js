import {
  FormControlLabel,
  TextField,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const newUsers = {username,password,remember};
      setUsers([...users, newUsers]);
      setPassword("");
      setUsername("");
      setRemember(false);
    }
    alert(JSON.stringify(users));
  };

  

  return (
    <div className="Login-wrapper">
      <form onSubmit={handleSubmit}>
        <Stack
          spacing={4}
          width="430px"
          height="485px"
          border="1px solid black"
          padding="1rem"
          borderRadius="10px"
        >
          <Typography variant="h3" textAlign="center" fontSize="2.5rem">
            Log In
          </Typography>
          <TextField
            variant="outlined"
            label="username"
            type="username"
            color="primary"
            size="small"
            autoComplete="off"
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            error={!username}
            helperText={!username ? "Enter username" : null}
          />
          <TextField
            variant="outlined"
            label="password"
            type="password"
            color="primary"
            size="small"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            error={!password}
            helperText={!password ? "Enter valid password" : null}
          />
          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox
                color="primary"
                checked={remember}
                size="small"
                onChange={(e)=>setRemember(e.target.checked)}
              />
            }
          />
          <Button variant="contained" size="large" type="submit">
            Log in
          </Button>

          <Stack
            spacing={1}
            direction="row"
            display="flex"
            alignitem="center"
            justifyContent="center"
          >
            <Typography variant="body1">Not a member?</Typography>
            <Link to="/sign-up-form">Sign Up</Link>
          </Stack>
        </Stack>
      </form>
    </div>
  );
}
