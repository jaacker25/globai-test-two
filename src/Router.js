import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Home from './pages/Home';
import GoHome from './pages/GoHome';

const Router = ()=>{
     const client = new ApolloClient({
         uri: 'https://api.graphql.jobs'
     });

    return(
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>
                <Route exact path= "/" component= { Home } />
                <Route component= { GoHome } />//Another address will take us to HOME
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
    );
}

export default Router;