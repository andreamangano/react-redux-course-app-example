import React from 'react'
import BookmarkListContainer from './containers/BookmarkListContainer'
import AddBookmarkContainer from './containers/AddBookmarkContainer'
import './app.css'

const App = () => (
  <div className="app">
    <header>
      <h1>BMark App</h1>
    </header>
    <main>
      <AddBookmarkContainer />
      <BookmarkListContainer />
    </main>
  </div>
);

export default App
