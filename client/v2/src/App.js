import React from 'react'
import BookmarkListContainer from './containers/BookmarkListContainer'
import './app.css'

const App = () => (
  <div className="app">
    <header>
      <h1>BMark App</h1>
    </header>
    <main>
      <BookmarkListContainer />
    </main>
  </div>
);

export default App
