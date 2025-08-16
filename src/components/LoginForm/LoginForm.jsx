import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };

  const handleSubmit = async (values, { resetForm, setSubmitting, setErrors }) => {
    try {
      await dispatch(logIn(values)).unwrap();
      resetForm();
    } catch (error) {
      setErrors({ submit: error.message || "Login failed" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ errors, isSubmitting }) => (
        <Form className={css.login}>
          <label>
            Email
            <Field type="email" name="email" required />
          </label>

          <label>
            Password
            <Field type="password" name="password" required />
          </label>

          {errors.submit && <div className={css.error}>{errors.submit}</div>}

          <button type="submit" disabled={isSubmitting}>
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
}
