import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'
import { USER_PER_PAGE } from '../../utils/constants'

const CharacterGrid = ({ items, isLoading ,Page}) => {
  //console.log(USER_PER_PAGE);
  const startIndex=(Page-1)*USER_PER_PAGE;
  const selectedUser=items.slice(startIndex,startIndex+USER_PER_PAGE);
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {selectedUser.map((item) => (
        <CharacterItem onClick={item.char_id} key={item.char_id} item={item}></CharacterItem>
      ))}
    
    </section>
  )
}

export default CharacterGrid
