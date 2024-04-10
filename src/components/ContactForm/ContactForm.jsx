import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { object, string } from "yup";

const ContactForm = ({ addContact }) => {
  const contactSchema = object({
    name: string().min(3, "Too Short").max(50, "Too much").required(),
    number: string()
      .min(3, "Too Short")
      .max(50, "Too much")
      .matches(/\d{3}-\d{2}-\d{2}/, "Invalid number")
      .required(),
  });
  const handleSubmit = (values, options) => {
    options.resetForm();
    values.id = nanoid();
    addContact(values);
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name"></Field>
            <ErrorMessage component="span" name="name"></ErrorMessage>
          </label>
          <label>
            Number
            <Field type="text" name="number"></Field>
            <ErrorMessage component="span" name="number"></ErrorMessage>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
