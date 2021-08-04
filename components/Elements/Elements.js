import styles from "./Elements.module.css";

export const InviteButton = (props) => {
  return (
    <button className={styles.btn} {...props}>
      Request Invite
    </button>
  );
};
