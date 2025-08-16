import css from './Home.module.css';
import { FaBlenderPhone } from "react-icons/fa";
export default function Home() {
  return <div className={css.home}> <div className={css.icon}><FaBlenderPhone /></div>Welcome to Phonebook <p className={css.p}>To get started with your Phonebook, please login or register. Thereafter go to the contacts tab.</p> </div>;
  
}
