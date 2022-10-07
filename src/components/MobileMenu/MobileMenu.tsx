import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Container } from "..";
import { headerLinks } from "../../util/constants";
import styles from "./MobileMenu.module.css";

interface IMobileMenuProps {
  isMenuOpened: React.ComponentState;
  setIsMobileMenuOpened: React.SetStateAction<React.ComponentState>;
}

const MobileMenu: React.FunctionComponent<IMobileMenuProps> = ({
  isMenuOpened,
  setIsMobileMenuOpened,
}) => {
  
  const { t } = useTranslation("common");

  const closeMenu = (e: any) => {
    if (!e.target.classList.contains(styles.inner)) {
      setIsMobileMenuOpened(false);
    }
  };

  return (
    <div
      className={`${styles.overlay} ${isMenuOpened && styles.active}`}
      onClick={(e) => closeMenu(e)}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <Container>
            <div className={styles.icon}>
              <span></span>
            </div>
          </Container>
        </div>
        <div className={styles.body}>
          <nav>
            <ul>
              {headerLinks.map((link, i) => (
                <Link href={link.href} key={i}>
                  <li className={styles.link}>{t(link.title)}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
