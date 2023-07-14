import { Route, Routes } from 'react-router-dom';
import { navigationData } from '~/utils/constants';
import { useAppSelector } from '~/hooks/redux';
import Login from '~/pages/Login/Login';

const Navigation = () => {
  const { googleToken } = useAppSelector((state) => state.auth);

  if (!googleToken) return <Login />;

  return (
    <Routes>
      {navigationData.map((el) => (
        <Route key={el.path} path={el.path} element={el.element} />
      ))}
    </Routes>
  );
};

export default Navigation;
