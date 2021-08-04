import InfoItem from "../InfoItem/InfoItem";
import styles from "./InfoSection.module.css";

const info = [
  {
    id: 0,
    alt: "hand holding bank cards",
    image: "/images/icon-online.svg",
    title: "Online Banking",
    message:
      "Our modern web and mobile applicatons allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 1,
    alt: "app with dollar sign logo",
    image: "/images/icon-budgeting.svg",
    title: "Simple Budgeting",
    message:
      "See exactly where your money goes each month. Receive notificatoins when you're close to hitting limits",
  },
  {
    id: 2,
    alt: "people on a cog logo",
    image: "/images/icon-onboarding.svg",
    title: "Fast Onboarding",
    message:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 3,
    alt: "CPU with a brain in the middle",
    image: "/images/icon-api.svg",
    title: "Open Api",
    message:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

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
