import MyForm from "./MyForm";
import MyInput from "./MyInput";
import MyInputWithLabel from "./MyInputWithLabel";
import MyLabel from "./MyLabel";
import MyTextArea from "./MyTextArea";
import MyTextAreaWithLabel from "./MyTextAreaWithLabel";

const ContactForm = () => {
  const fieldsNamesObj = {
    firstName: "first-name",
    lastName: "last-name",
    email: "email",
    message: "message",
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      let firstNameValue = event.target["first-name"].value;
      let lastNameValue = event.target["last-name"].value;
      let emailValue = event.target.email.value;
      let messageValue = event.target.message.value;

      console.log(event.target);

      // TODO do something with form values
      // console.log(newForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-us-form">
      <MyForm onSubmit={onSubmit}>
        {/* Name */}
        <MyLabel
          text="Name"
          htmlFor="first-name"
          className="above-label"
          required={true}
        />
        <div className="form-names-container grid">
          <MyInputWithLabel
            // autocomplete={false}
            labelDown="First Name"
            name={"first-name"}
            required={true}
            type="text"
          />
          <MyInputWithLabel
            // autocomplete={false}
            labelDown="Last Name"
            name={"last-name"}
            required={true}
            type="text"
          />
        </div>
        <br />
        {/* Email */}
        <MyInputWithLabel
          // autocomplete={false}
          label="Email"
          name={"email"}
          required={true}
          type="email"
        />

        <br />
        {/* Message */}
        {/* <MyInputWithLabel
          // autocomplete={false}
          label="Message"
          name={"message"}
          required={true}
          type="text"
        /> */}
        <MyTextAreaWithLabel
          style={{ resize: "none" }}
          label={"Message"}
          name="message"
          required={true}
          rows={5}
        />

        <br />
        {/* Recaptcha */}
        {/* <br /> */}
        <MyInput
          value="Send"
          className="my-btn bg-primary my-simple-btn"
          type="submit"
        />
      </MyForm>
    </div>
  );
};

export default ContactForm;
