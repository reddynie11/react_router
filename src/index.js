import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

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
                <Switch>                    
                    <Route path='/profile' component={Profile} />
                    <Route path='/posts/:id' component={PostItem} />
                    <Route path='/posts' component={Post} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
            
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

