import React, { Component } from 'react';
import {BrowserRouter,
       Route,
       Switch} from 'react-router-dom';
import apiKey from './config';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
import SearchForm from './Components/SearchForm';


class App extends Component {

  constructor() {
    super();
      this.state = {
        photos: [],
        cats: [],
        dogs: [],
        birds: [],
        tags: ''
          };
  }

  componentDidMount() {
    this.searchResults();
    this.cats();
    this.dogs();
    this.birds();

  }

//Function to search photos based on tags
  searchResults = (query = "animals") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData=> {
        this.setState({ photos: responseData.photos.photo,
        tags: query
      })

        })
    .catch(err=> {
      console.log('Error fetching and parsing data', err)
      })
  }

//Header links to find photos based on given tag specified in links

  cats = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData=> {
      this.setState({ cats: responseData.photos.photo })
  })
    .catch(err=> console.log('Error fetching and parsing data', err))
  }


 dogs = () => {
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData=> {
        this.setState({ dogs: responseData.photos.photo })
})
  .catch(err=> console.log('Error fetching and parsing data', err))
}

 birds = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=birds&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData=> {
      this.setState({ birds: responseData.photos.photo })
})
  .catch(err=> console.log('Error fetching and parsing data', err))

}
//Rendered the components in the order they appeared on the header
//Routed the header links in the <Switch> tag
  render() {
    return (

    <BrowserRouter>
      <div className="container">
        <SearchForm onSearch={this.searchResults} />
        <Nav/>
        <div className="photo-container">
        <Switch>
          <Route exact path= "/" render={ () => <PhotoContainer data={this.state.photos} title={this.state.tags}/>} />
          <Route exact path= "/search/:query" render={ () => <PhotoContainer data={this.state.photos} title={this.state.tags} onSearch={this.searchResults}/> }/>
          <Route path= "/cats" render={ () => <PhotoContainer data={this.state.cats} onClick={this.state.cats} title="Cats"/>} />
          <Route path= "/dogs" render={ () => <PhotoContainer data={this.state.dogs} onClick={this.state.dogs} title="Dogs"/>} />
          <Route path= "/birds" render={ () => <PhotoContainer data={this.state.birds} onClick={this.state.birds} title="Birds"/> } />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
}
}

export default App;