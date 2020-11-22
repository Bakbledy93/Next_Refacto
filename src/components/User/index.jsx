import { userRequest } from '../../actions';
import profile from '../../data/Profile'
import { useDispatch } from 'react-redux';


const User = () => {
  const dispatch = useDispatch();

  const fetchUser = (profile) => {    
    return dispatch(userRequest(profile));
  }
  return fetchUser(profile)
}

export default User