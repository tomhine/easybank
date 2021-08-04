import styles from "./InfoItem.module.css";
import Image from "next/image";

const InfoItem = ({ info }) => {
  return (
    <div className={styles.infoItem}>
      <Image src={info.image} alt={info.alt} width="75" height="75" />
      <h3>{info.title}</h3>
      <p>{info.message}</p>
    </div>
  );
};

export default InfoItem;
