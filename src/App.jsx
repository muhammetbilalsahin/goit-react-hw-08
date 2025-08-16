import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Contacts from './pages/Contacts/Contacts';

import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <div style={{ padding: 24 }}>Loading...</div>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Registration />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
