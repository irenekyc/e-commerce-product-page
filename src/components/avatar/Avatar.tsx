import React, { FunctionComponent } from "react";
import styles from "./Avatar.module.scss";

const Avatar: FunctionComponent = () => {
  const user = {
    avatar: "/images/image-avatar.png",
    name: "User",
  };

  return (
    <button className={styles.avatar}>
      <img src={user.avatar} alt={user.name} />
    </button>
  );
};

export default Avatar;
