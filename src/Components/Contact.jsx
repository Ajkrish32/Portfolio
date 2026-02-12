import "./Contact.css";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate environment variables
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Missing EmailJS configuration:", {
        SERVICE_ID: !!SERVICE_ID,
        TEMPLATE_ID: !!TEMPLATE_ID,
        PUBLIC_KEY: !!PUBLIC_KEY
      });
      alert("Email service is not configured properly. Please contact the site administrator.");
      return;
    }

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      e.target,
      PUBLIC_KEY
    )

    .then(() => {
      alert("Message sent successfully ✅");
      e.target.reset();
    })
    .catch((error) => {
      console.error("EmailJS FULL ERROR 👉", error);
      alert(error.text || "Failed to send message ❌");
    });
  };

  return (
    <div id="contact" className="Con-section">
      <h1>Contact</h1>
      <h2>Let's get in touch</h2>

      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Enter Your Name"
          className="Inp-name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Enter Your Email"
          className="Inp-mail"
          required
        />

        <textarea
          name="message"
          placeholder="Enter Your Message"
          className="Inp-mess"
          required
        />

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
