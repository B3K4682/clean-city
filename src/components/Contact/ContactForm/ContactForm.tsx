// React Imports
import { useState, useEffect } from "react";

// Import styles
import styles from "./ContactForm.module.css";

// Import Components
import { Button } from "../..";
import SendIcon from "../../../../public/images/icons/send";
import toast from "react-hot-toast";

// Import constants
import { CONTACT_FORM } from "../../../util/constants";

// Import translation
import { TFunction } from "next-i18next";

interface IContactFormProps {
  t: TFunction | any;
}

const ContactForm: React.FunctionComponent<IContactFormProps> = ({ t }) => {
  const [values, setValues] = useState<Object | any>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Object | any>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(values);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      toast.success(`${t("sent_succesfully")}`, {
        duration: 3000,
        position: "top-right",
      });
      setValues({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  const validateForm = (values: Object | any) => {
    let errors: Object | any = {};
    if (!values.name) {
      errors.name = `${t("Name")} ${t("is_required")}`;
    }
    if (!values.phone) {
      errors.phone = `${t("Phone")} ${t("is_required")}`;
    }
    if (!values.email) {
      errors.email = `${t("Email")} ${t("is_required")}`;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = `${t("Email")} ${t("is_invalid")}`;
    }
    if (!values.message) {
      errors.message = `${t("Message")} ${t("is_required")}`;
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {CONTACT_FORM.map((input) =>
        input.type != "textarea" ? (
          <div className={styles.input_group} key={input.id}>
            <input
              type={input.type}
              placeholder={t(input.placeholder)}
              onChange={handleChange}
              name={input.name}
              value={values[input.name]}
            />
            <span className={styles.error}>{errors[input.name]}</span>
          </div>
        ) : (
          <div className={styles.input_group} key={input.id}>
            <textarea
              placeholder={t("Message")}
              name={input.name}
              onChange={handleTextAreaChange}
              value={values[input.name]}
            />
            <span className={styles.error}>{errors[input.name]}</span>
          </div>
        )
      )}

      <div className={styles.action}>
        <Button type="secondary">
          <SendIcon />
          <span>{t("Send")}</span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
