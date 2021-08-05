import InfoItem from "../InfoItem/InfoItem";
import styles from "./InfoSection.module.css";
import info from "./info-data";

const InfoSection = () => {
  const items = info.map((item) => <InfoItem key={item.id} info={item} />);

  return (
    <section className={styles.infoContainer}>
      <h2>Why choose Easybank?</h2>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className={styles.infoList}>{items}</div>
    </section>
  );
};

export default InfoSection;
