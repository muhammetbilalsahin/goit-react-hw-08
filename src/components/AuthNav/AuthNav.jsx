import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { CiLogin } from "react-icons/ci";
import { GiArchiveRegister } from "react-icons/gi";

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink
        to="/register"
        className={({ isActive }) => 
          isActive ? css.activeLink : css.link
        }
      >
        Register <GiArchiveRegister />
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => 
          isActive ? css.activeLink : css.link
        }
      >
        Login <CiLogin />
      </NavLink>
    </div>
  );
}
