import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const useAuth = () => {
  const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);
  return { isAuthenticated, token };
};

export default useAuth; 