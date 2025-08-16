import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './Registration.module.css';

export default function Registration() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create a New Account</h1>
      <RegistrationForm />
    </div>
  );
}
