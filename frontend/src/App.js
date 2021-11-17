import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';

function App() {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () =>{
        dispatch(signout());
    }
 return(
     <BrowserRouter>
  
  <div className="grid-container">
  
      <header className="row">
          <div>
              <Link className="brand" to="/">Give A Way!</Link>
          </div>

          <div>
              <Link to="/cart"> <i class="fas fa-shopping-cart"></i> Cart
              {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
              )}
              </Link>
              {userInfo ? (
                      <div class="dropdown">
                      <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i></Link>
                      <ul className="dropdown-content">
                          <Link to="#signout" onClick={signoutHandler}>Sign Out <i class="fas fa-sign-out-alt"></i></Link>
                      </ul>
                      </div>
                  ):
                  (
                    <Link to="/signin"> <i class="fas fa-user-alt"></i> Sign In</Link>
                  )
              }
              
          </div>
      </header>
      
      <main>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          
      </main>
      
      <footer className="row center">
          All Right Reserved
      </footer>

  </div>
  </BrowserRouter>
 );
}

export default App;
