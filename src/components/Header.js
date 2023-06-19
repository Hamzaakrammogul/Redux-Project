import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';


const Header = () => {
const dispatch= useDispatch();

const onClickHandler = ()=>{
  dispatch(authActions.logout());
}

  const auth = useSelector(state => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
           {auth && <a href='/'>My Products</a>}
          </li>
          <li> 
           {auth && <a href='/'>My Sales</a>}
          </li>
          <li>
            {auth && <button onClick={onClickHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
