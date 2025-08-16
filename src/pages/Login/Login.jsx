import LoginForm from '../../components/LoginForm/LoginForm'; 
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log In to Your Account</h1>
      <LoginForm />
    </div>
  );
}
