import { InviteButton } from '../Elements/Elements';
import styles from './Header.module.css';
import mockupImg from '../../public/images/image-mockups.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.images}>
        <div className={styles.bgImage}>
          <Image
            className={styles.mockup}
            src={mockupImg}
            alt="easybank mockup on smartphones"
          />
        </div>
      </div>
      <div className={styles.textContainer}>
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
