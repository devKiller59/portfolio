import '../assets/styles/contact.css';

const Contact = () => {
  return (
    <div name="Contact" className="contact">
      <h1>Contacto</h1>
      <p>
        Deseas conocer más sobre mi trabajo o tienes alguna duda?
        <br />
        No dudes en contactarme.
      </p>
      <div className='form-container'>
        <form action="https://getform.io/f/d7beba7b-7830-4df3-b660-e03daedc428a" method="POST">
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
};


export default Contact;