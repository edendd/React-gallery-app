import React from 'react';
import {NavLink} from 'react-router-dom';

class  extends Component {
    render() { 
        return ( 
        <nav className="main-nav">
           <ul className= "main-nav">
          <li>  <NavLink to = "/cats">Cats</NavLink> </li>
          <li> <NavLink to = "/dogs">Dogs</NavLink>  </li>
          <li> <NavLink to = "/computers">Computers</NavLink></li>
        </ul>
      </nav>
         );
    }
}
 
export default Nav;