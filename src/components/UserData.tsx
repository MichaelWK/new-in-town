import React, { FC, useState } from "react";
import { User } from "./../models/User";
import "./UserData.css";
import { Button } from "@mui/material";
import { getBase64 } from "../utils/utils";
import { AuthThunkDispatch, updateUser } from "./../context/authSlice";
import { useDispatch } from "react-redux";

export const UserData: FC<User> = (currentUser) => {
  const dispatch = useDispatch<AuthThunkDispatch>();
  const [isImageChanging, setIsImageChanging] = useState(false);

  const handleFileInputChange = (e: any) => {
    setIsImageChanging(true);
    getBase64(e.target.files[0])
      .then((result: any) => {
        dispatch(updateUser({ ...currentUser, picture: result })).then(() => {
          setIsImageChanging(false);
        });
      })
      .catch((err) => {
        console.log(err);
        setIsImageChanging(false);
      });
  };

  return (
    <div>
      {currentUser.firstName}
      <img
        className={isImageChanging ? "userdata__picture userdata__picture-changing" : "userdata__picture"}
        src={currentUser.picture}
        alt="User picture"
      />
      <input
        accept="image/*"
        onChange={handleFileInputChange}
        style={{ display: "none" }}
        id="raised-button-file"
        multiple={false}
        type="file"
      />
      <label htmlFor="raised-button-file">{!isImageChanging && <Button component="span">Change picture</Button>}</label>
    </div>
  );
};
