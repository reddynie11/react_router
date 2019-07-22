import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
                    <Link to='/'>Home</Link><br/>
                    <Link to='/posts'>Posts</Link><br/>
                    <Link to='profile'>Profile</Link><br/><hr/>
                </header>
                <Route path='/' exact component={Home} />
                <Route path='/posts' component={Post} />
                <Route path='/posts/1' component={PostItem} />
                <Route path='/profile' component={Profile} />
            </div>
            
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

