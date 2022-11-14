import {
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import {SignUpSchema} from "./Schemas";
import React from "react";

const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirm_password:"",
    remember:false

}

export default function SignUpForm() {

    const frmControl = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        onSubmit: (values)=>{
            alert(JSON.stringify(values));
        }
    })

  return (
    <div className="signUp-wrapper">
      <form onSubmit={frmControl.handleSubmit}>
        <Stack
          spacing={4}
          border="1px solid black"
          borderRadius="10px"
          padding="2rem"
          width="500px"
        >
          <Typography
            variant="h5"
            gutterBottom
            textAlign="center"
            color="primary"
          >
            Registration From
          </Typography>
          <Stack spacing={2} direction="row">
            <TextField
              variant="standard"
              label="FirstName"
              name="firstName"
              id="fistName"
              type="text"
              size="medium"
              fullWidth
              required
              autoComplete="off"
              value={frmControl.values.firstName}
              onChange={frmControl.handleChange}
              error={frmControl.touched.firstName && Boolean(frmControl.errors.firstName) }
              helperText={frmControl.errors.firstName}
            />
            <TextField
              variant="standard"
              label="LastName"
              name="lastName"
              id="lastName"
              type="text"
              size="medium"
              required
              fullWidth
              autoComplete="off"
              value={frmControl.values.lastName}
              onChange={frmControl.handleChange}
              error={frmControl.touched.lastName && Boolean(frmControl.errors.lastName) }
              helperText={frmControl.errors.lastName}
            />
          </Stack>
          <Stack spacing={4}>
            <TextField
              variant="standard"
              label="Email Address"
              name="email"
              id="email"
              type="email"
              size="medium"
              required
              autoComplete="off"
              value={frmControl.values.email}
              onChange={frmControl.handleChange}
              error={frmControl.touched.email && Boolean(frmControl.errors.email) }
              helperText={frmControl.errors.email}
            />
            <TextField
              variant="standard"
              label="Password"
              name="password"
              id="password"
              type="password"
              size="medium"
              required
              autoComplete="off"
              value={frmControl.values.password}
              onChange={frmControl.handleChange}
              error={frmControl.touched.password && Boolean(frmControl.errors.password) }
              helperText={frmControl.errors.password}
            />
            <TextField
              variant="standard"
              label="Confirm password"
              name="confirm_password"
              id="confirm_password"
              type="password"
              size="medium"
              required
              autoComplete="off"
              value={frmControl.values.confirm_password}
              onChange={frmControl.handleChange}
              error={frmControl.touched.confirm_password && Boolean(frmControl.errors.confirm_password) }
              helperText={frmControl.errors.confirm_password}
            />
          </Stack>
          <Stack>
            <FormControlLabel
              label="I accept the Terms of uses & Privacy policy"
              control={
                <Checkbox
                  color="primary"
                  name="remember"
                  id="remember"
                  checked={frmControl.values.remember}
                  size="small"
                  onChange={frmControl.handleChange}
                />
              }
            />
          </Stack>
          <Button variant="contained" type="submit">Sign Up</Button>
        </Stack>
      </form>
    </div>
  );
}
