import { useEffect, useState } from "react";

export const Avatar = () => {
  const [avatar, setAvatar] = useState<string>();

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((response) => response.json())
      .then((response) => setAvatar(response.message));
  }, []);

  return (
    <img
      style={{
        border: "5px double #A4A4A4",
        borderRadius: "40px 40px 40px 40px",
        width: "200px",
        height: "200px",
      }}
      src={avatar}
      alt="ciaone"
    />
  );
};
