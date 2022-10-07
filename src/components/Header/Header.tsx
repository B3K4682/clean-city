import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "..";
import styles from "./Header.module.css";
import { headerLinks, languages } from "../../util/constants";
import { RiArrowDownSLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

interface IHeaderProps {
  setIsMobileMenuOpened: React.SetStateAction<React.ComponentState>;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  setIsMobileMenuOpened,
}) => {
  const router = useRouter();
  const currentLocale = router.locale;
  const { t } = useTranslation("common");

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  useEffect(() => {
    setIsDropdownOpened(false);
  }, [currentLocale]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_wrapper}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src={"/logo.png"} width={186} height={48} />
            </div>
          </Link>
          <div className={styles.links}>
            <ul>
              {headerLinks.map((link, i) => (
                <Link href={link.href} key={i}>
                  <li key={i}>{t(link.title)}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className={`${styles.language_dropdown} md_none`}>
            <Button
              onClick={() => setIsDropdownOpened((prevOpened) => !prevOpened)}
              type="blank"
            >
              <RiArrowDownSLine size={18} color="#09090B" />
              <i
                className={`${styles.svg_i} ${styles[`${currentLocale}_flag`]}`}
              ></i>
            </Button>
            {isDropdownOpened && (
              <div className={styles.dropdown}>
                {languages.map((lang) => (
                  <div className={styles.language_item} key={lang.title}>
                    <Link href={router.pathname} locale={lang.title}>
                      <p className={styles.language_href}>
                        <i
                          className={`${styles.svg_i} ${styles[lang.flag]} ${
                            styles.language_flag
                          }`}
                        ></i>
                        <span>{lang.title}</span>
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.mobile_menu}>
            <div className={styles.language_dropdown}>
              <Button
                onClick={() => setIsDropdownOpened((prevOpened) => !prevOpened)}
                type="blank"
              >
                <RiArrowDownSLine size={18} color="#09090B" />
                <i
                  className={`${styles.svg_i} ${
                    styles[`${currentLocale}_flag`]
                  }`}
                ></i>
              </Button>
              {isDropdownOpened && (
                <div className={styles.dropdown}>
                  {languages.map((lang) => (
                    <div className={styles.language_item} key={lang.title}>
                      <Link href={router.pathname} locale={lang.title}>
                        <p className={styles.language_href}>
                          <i
                            className={`${styles.svg_i} ${styles[lang.flag]} ${
                              styles.language_flag
                            }`}
                          ></i>
                          <span>{lang.title}</span>
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Button
              type="blank"
              onClick={() => setIsMobileMenuOpened(true)}
              classNames="navbar_toggler"
            >
              <span></span>
              <span></span>
              <span></span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
