import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingtime] = useState(0)


  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)

  }

  const handleMarksAsRead = (time, id) => {
    // setReadingtime(readingTime + time);
    const newReadingTime = readingTime + time;
    setReadingtime(newReadingTime)

    // remove from book mark
    // console.log('remove',id)

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }


  return (
    <>

      <Header></Header>
      <div className=' md:flex max-w-7xl mx-auto'>
        <Blogs handleMarksAsRead={handleMarksAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>


      </div>
    </>
  )
}

export default App;
