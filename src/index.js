import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import artsyClient from './api/artsyClient'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ModalContextProvider from './components/context/ModalContext'
import ArtistContextProvider from './components/context/ArtistContext'
import Home from './components/routes/Home'
import Profile from './components/routes/Profile'

const App = () => {
  return (
    <ApolloProvider client={artsyClient}>
      <ModalContextProvider>
        <ArtistContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/artist/:id" component={Profile} />
            </Switch>
          </Router>
        </ArtistContextProvider>
      </ModalContextProvider>
    </ApolloProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
