import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'
import Pagination from './components/Pagination'
import { USER_PER_PAGE } from './utils/constants'
const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const[id,setId]=useState(2);
  const [Page,setPage]=useState(1);
  const[totalPages,setTotalPages]=useState(0);
//  console.log(totalPages);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      const fetchSingleitem =()=>
      {
        fetch('https://www.breakingbadapi.com/api/characters/'+id)
        .then((response)=>response.json())
        .then((json)=>console.log(json))
        
      }
      fetchSingleitem()

      // console.log(result.data)

      setItems(result.data)
      setIsLoading(false)

     setTotalPages(Math.ceil(result.data.length/USER_PER_PAGE));
    }
    
    fetchItems()
  }, [query])
//
const handlepageclick=num=>{
  setPage(num);
}
  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} Page={Page}/>
      <Pagination totalPages={totalPages} handleclick={handlepageclick}/>
    </div>
  )
}

export default App
