import React, { FunctionComponent } from "react";
import styles from "./Avatar.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const Avatar: FunctionComponent = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <button className={styles.avatar}>
      <img src={user?.thumbnail} alt={user?.name} />
    </button>
  );
};

export default Avatar;
