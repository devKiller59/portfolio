import '../assets/styles/contact.css';
import { useTheme } from "../context/ThemeProvider";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div id='contact' name="Contact" className="contact" style={{ backgroundColor: theme.contactBackground, color: theme.contactTextColor, transition: ".2s" }} >
      <h1>Contacto</h1>
      <p>
        Deseas conocer más sobre mi trabajo o tienes alguna duda?
        <br />
        No dudes en contactarme.
      </p>
      <div className='form-container'>
        <form action="https://getform.io/f/d7beba7b-7830-4df3-b660-e03daedc428a" method="POST">
          <b>-los campos marcados con (*) son obligatorios-</b>
          <br />
          <input type="text" name="nombre" placeholder="Nombre*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <input type="tel" name="telefono" placeholder="Teléfono"/>
          <textarea name="message" placeholder="Mensaje*" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
};


export default Contact;