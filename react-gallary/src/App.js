import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
import Photo from './Components/Photo';
import SearchForm from './Components/SearchForm';



class App extends Component {
  state = {  }
  render() { 

    return ( 
     <BrowserRouter>
     <div className ="container">
     <SearchForm/>
     <Nav/>

     <div className = "photo-container">



     </div>
     </div>
     </BrowserRouter> 
     );
  }
}
 
export default App;
