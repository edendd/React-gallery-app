import React from 'react';
import {NavLink} from 'react-router-dom';

class  extends Component {
    render() { 
        return ( 
        <nav className="main-nav">
           <ul className= "main-nav">
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>
         );
    }
}
 
export default Nav;