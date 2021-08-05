import styles from './Footer.module.css';
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../Icons/Icons';
import { InviteButton } from '../Elements/Elements';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoSocialContainer}>
        <Logo fill="#fff" />
        <span className={styles.socialIcons}>
          <FacebookIcon />
          <YoutubeIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </span>
      </div>
      <div className={styles.footerNavContainer}>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className={styles.buttonCopyrightContainer}>
        <InviteButton />
        <div className={styles.copyright}>
          <CopyrightIcon style={{ width: 16 }} /> Easybank. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
