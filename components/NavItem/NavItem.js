import styles from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <div className={styles.navItem}>
      <li>{props.title}</li>
      <div className={styles.bottomBorder}></div>
    </div>
  );
};

export default NavItem;
