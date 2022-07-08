const Contact = () => {
  return (
    <div name="Contact" className="contact">
      <h1>Contact</h1>
      <p>This is the contact page</p>
      <div>
        <form action="https://getform.io/f/d7beba7b-7830-4df3-b660-e03daedc428a" method="POST">
          <input type="text" name="name" placeholder="Name" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
};


export default Contact;