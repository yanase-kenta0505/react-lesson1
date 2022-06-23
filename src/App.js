import React, { useState } from 'react'
import axios from 'axios'
import SearchBar from './components/searchBar'
import ImageList from './components/imageList'

const App = () => {
  const [images,setImages] = useState([])
  const onSearchSubmit = async(term) => {
   try {
    const params = {
      key:'25781765-2e3c520e931d7dd3ce78cdcd7',
      q:term
    }
    const response = await axios.get("https://pixabay.com/api/",{params})
    setImages(response.data.hits)
    if(response.data.total === 0) {
      alert('none image')
    }
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <div className='ui container' style={{ marginTop: '20px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images}/>
    </div>

  )
}

export default App