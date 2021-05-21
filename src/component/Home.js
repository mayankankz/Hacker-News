import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ErrPage from './ErrPage';
import Header from './Header';
import ViewStories from "./ViewStories";
function Home(props) {
    return (
       <BrowserRouter>
       <div className="container">
           <Header/> 
           <Switch>
           <Route path="/" render={()=> <Redirect to="/top"/>} exact/>
           <Route path="/:type" component={ViewStories}/>
               <Route component={ErrPage}  />
           </Switch>
       </div>

       </BrowserRouter>
    );
}

export default Home;