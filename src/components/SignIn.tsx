import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./SignIn.css";
import { UsersChooseDialog } from "./UsersChooseDialog";
import { AuthThunkDispatch, fetchUserById, loginUser } from "../context/authSlice";

export const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    incorrectEmailOrPassword: false,
    showUsersChoosedialog: false,
  });
  const dispatch = useDispatch<AuthThunkDispatch>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const showUsersChoosedialog = () => {
    setState({ ...state, showUsersChoosedialog: true });
  };
  const sendForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(fetchUserById("1"));
    //setState({ ...state, incorrectEmailOrPassword: true });

    // setState({...state, [event.target.name]:event.})
  };
  return (
    <div>
      <Card>
        <CardContent>
          <form className="signin__form" onSubmit={sendForm}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={state.password}
              onChange={handleChange}
            />
            <Button variant="contained" fullWidth className="signin__button" type="submit">
              Log In
            </Button>
            {state.incorrectEmailOrPassword && <div className="signin__error">Incorrect email or password</div>}
            <div>
              <Button variant="contained" className="signin__button signing__signup" color="success">
                Sign Up
              </Button>
            </div>

            <hr />

            <Button variant="contained" fullWidth className="signin__button" onClick={showUsersChoosedialog}>
              Demo
            </Button>
          </form>
        </CardContent>
      </Card>
      {state.showUsersChoosedialog && (
        <UsersChooseDialog handleClose={() => setState({ ...state, showUsersChoosedialog: false })} />
      )}
    </div>
  );
};
