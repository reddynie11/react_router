import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

//components
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';
import PostItem from './components/post_item';

const App = ()=>{
    return(
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to='/'>Home</NavLink><br/>
                    <NavLink to='/posts'>Posts</NavLink><br/>
                    <NavLink to='profile'>Profile</NavLink><br/><hr/>
                </header>
                <Route path='/' exact component={Home} />
                <Route path='/posts' exact component={Post} />
                <Route path='/posts/:id' component={PostItem} />
                <Route path='/profile' component={Profile} />
            </div>
            
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

