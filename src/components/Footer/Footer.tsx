// Next Imports
import Link from "next/link";

// Import styles
import styles from "./Footer.module.css";

// Import components
import ToTopIcon from "../../../public/images/icons/toTop";
import { Container } from "..";

// Import constants
import {
  headerLinks,
  fastLinks,
  contactLinks,
  footerSocials,
} from "../../util/constants";

// Import translation
import { useTranslation } from "next-i18next";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const toTopClick = () => {
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.toTop} onClick={toTopClick}>
        <div className={styles.icon}>
          <ToTopIcon />
        </div>
      </div>
      <div className={styles.footerContent}>
        <Container>
          <div className={styles.footerWrapper}>
            <div className={styles.footerInner}>
              <div className={styles.footerLinks}>
                <h2>ნავიგაცია</h2>
                <ul>
                  {headerLinks.map(
                    (link, i) =>
                      link.activeFooter && (
                        <li key={i}>
                          <Link href={link.href}>{t(link.title)}</Link>
                        </li>
                      )
                  )}
                </ul>
              </div>
              <div className={styles.footerLinks}>
                <h2>სწარფი ბმულები</h2>
                <ul>
                  {fastLinks.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>{t(link.title)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.footerLinks}>
                <h2>კონტაქტი</h2>
                <ul>
                  {contactLinks.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
        <div className={styles.footerSocials}>
          {footerSocials.map((social, i) => (
            <Link href={social.href} key={i} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <div className={styles.card}>
                  <social.icon />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
