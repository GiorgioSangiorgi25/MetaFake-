import React, { useEffect, useState } from "react";
import { Avatar } from "./Avatar";

interface Props {
  userId: number;
}
type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const User = ({ userId }: Props) => {
  const [user, setUser] = useState<TUser>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((response) => setUser(response));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Avatar />
        <div style={{ fontSize: "30px" }}>{user?.name}</div>
      </div>
    </>
  );
};
