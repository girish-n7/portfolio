export default function Contact() {
  return (
    // basic inputs and form with POST method calling the personal conatctAPI

    <form
      action="https://contact-api-girish-n7.vercel.app/"
      id="contact--form"
      method="POST"
    >
      <div className="contact--container page--transition">
        <p className="contact--head">CONTACT ME</p>
        <input
          type="text"
          className="contact--input"
          name="contactName"
          placeholder="Name"
          autoFocus
          required
          autoComplete="false"
        ></input>
        <input
          type="email"
          className="contact--input"
          name="contactMail"
          placeholder="e-mail"
          required
          autoComplete="false"
          autoCapitalize="false"
        ></input>
        <input
          type="text"
          className="contact--input"
          name="contactSubject"
          placeholder="Message Subject"
          required
          autoComplete="false"
        ></input>
        <textarea
          rows={5}
          type="text"
          className="contact--input"
          name="contactMessage"
          placeholder="Message"
          required
          autoComplete="false"
        ></textarea>
        <div className="contact--send">
          <button type="submit" className="btnHover">
            SEND
          </button>
        </div>
      </div>
    </form>
  );
}
