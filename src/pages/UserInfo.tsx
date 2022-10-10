import React from "react";
import { selectcurrentUser } from "../context/authSlice";
import { useSelector } from "react-redux";
import { User } from "../models/User";
import { UserData } from "../components/UserData";

export const UserInfo = () => {
  const currentUser: User = useSelector(selectcurrentUser);

  return (
    <>
      <UserData {...currentUser} />
      <div>{currentUser.firstName}</div>
      <div>{currentUser.id}</div>
      <div>{currentUser.lastName}</div>
    </>
  );
};
