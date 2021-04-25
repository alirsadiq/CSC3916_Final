import React from 'react';
import './App.css';
import MovieHeader from './components/productheader';
import MovieList from './components/productlist';
import Movie from './components/product';
import Authentication from './components/authentication';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <MovieHeader />
            <Route exact path="/" render={()=><MovieList />}/>
            <Route exact path="/itemlist" render={()=><MovieList />}/>
            <Route exact path="/item/:title" render={()=><Movie />}/>
            <Route path="/signin" render={()=><Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
