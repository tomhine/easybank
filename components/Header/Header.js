import useWindowSize from "../../hooks/useWindowSize";
import { InviteButton } from "../Elements/Elements";
import styles from "./Header.module.css";
import Image from "next/image";
import bgDesk from "../../public/images/bg-intro-desktop.svg";
import bgMob from "../../public/images/bg-intro-mobile.svg";
import mockupImage from "../../public/images/image-mockups.png";

const Header = () => {
  const windowWidth = useWindowSize().width;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.images}>
        <Image src={windowWidth > 375 ? bgDesk : bgMob} alt="background" />
        <Image
          className={styles.mockup}
          src={mockupImage}
          alt="mockups of app on mobile phones"
        />
      </div>
      <div>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <InviteButton />
      </div>
    </header>
  );
};

export default Header;
