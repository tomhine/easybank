import styles from "./NavItem.module.css";

const NavItem = (props) => {
  let borderStyle = styles.bottomBorder;

  return (
    <div className={styles.navItem}>
      <li>{props.title}</li>
      <div className={borderStyle}></div>
    </div>
  );
};

export default NavItem;
