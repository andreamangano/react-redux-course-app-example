import React from 'react'
import BookmarkList from './components/BookmarkList/BookmarkList'
import './app.css'

// Test data
const bookmarks = [
  {
    id: 1,
    title: 'Fullstack web development',
    url: 'http://fullstackbulletin.com',
    favourite: true
  },
  {
    id: 2,
    title: 'Andrea Mangano website',
    url: 'http://andreamangano.com',
    favourite: true
  }
];

const App = () => (
  <div className="app">
    <header>
      <h1>BMark App</h1>
    </header>
    <main>
      <BookmarkList items={bookmarks} />
    </main>
  </div>
);

export default App
