// Import styles
import styles from "./Contact.module.css";

// Import Components
import { Container, Button } from "..";
import ContactIcon from "../../../public/images/icons/contact";
import ContactForm from "./ContactForm/ContactForm";

// Import translation
import { useTranslation } from "next-i18next";

interface IContactProps {
  contactIcon?: "left" | "right";
}

const Contact: React.FunctionComponent<IContactProps> = ({ contactIcon = "left" }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        <h2>{t("Contact")}</h2>
      </div>
      <Container>
        <div className={styles.form}>
          {contactIcon === "left" && (
            <div className={styles.icon}>
              <ContactIcon position="left" />
            </div>
          )}
          <div className={styles.action}>
            <ContactForm t={t} />
          </div>
          {contactIcon === "right" && (
            <div className={styles.icon}>
              <ContactIcon position="right" />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Contact;
