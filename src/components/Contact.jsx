import '../assets/styles/contact.css';
import { useTheme } from "../context/ThemeProvider";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("global");

  return (
    <div id='contact' name="Contacto" className="contact" style={{ backgroundColor: theme.contactBackground, color: theme.contactTextColor, transition: ".2s" }} >
      <h1>{t("contact.title")}</h1>
      <p>
        {t("contact.text1")}
      </p>
      <p>
        {t("contact.text2")}
      </p>
      <div className='form-container'>
        <form action="https://getform.io/f/d7beba7b-7830-4df3-b660-e03daedc428a" method="POST">
          <b>-{t("contact.form.instructions")}-</b>
          <br />
          <input type="text" name="nombre" placeholder={t("contact.form.name")} required />
          <input type="email" name="email" placeholder={t("contact.form.email")} required />
          <input type="tel" name="telefono" placeholder={t("contact.form.tel")} />
          <textarea name="message" placeholder={t("contact.form.message")} required></textarea>
          <button type="submit">{t("contact.form.button")}</button>
        </form>
      </div>
    </div>
  )
};


export default Contact;