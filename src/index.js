import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';

const App = ()=>{
    return(
        <BrowserRouter>
            <div>
                <header>NavBar</header>
                <Route path='/' exact component={Home} />
                <Route path='/posts' component={Post} />
                <Route path='/profile' component={Profile} />
            </div>
            
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

