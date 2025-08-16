import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { CiLogout } from "react-icons/ci";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.user}>
      <span>Welcome, {user?.name || user?.email}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out <CiLogout />
      </button>
    </div>
  );
}
