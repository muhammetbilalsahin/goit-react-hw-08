import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const initialValues = { name: '', email: '', password: '', confirmPassword: '' };

  const handleSubmit = async (values, { resetForm, setSubmitting, setErrors }) => {
    try {
      if (values.password !== values.confirmPassword) {
        setErrors({ submit: "Passwords do not match" });
        return;
      }

      await dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      ).unwrap();

      resetForm();
    } catch (error) {
      setErrors({ submit: error.message || "Registration failed" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ errors, isSubmitting }) => (
        <Form className={css.registeration}>
          <label>
            Name
            <Field type="text" name="name" required />
          </label>

          <label>
            Email
            <Field type="email" name="email" required />
          </label>

          <label>
            Password
            <Field type="password" name="password" required />
          </label>

          <label>
            Confirm Password
            <Field type="password" name="confirmPassword" required />
          </label>

          {errors.submit && <div className={css.error}>{errors.submit}</div>}

          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
}
