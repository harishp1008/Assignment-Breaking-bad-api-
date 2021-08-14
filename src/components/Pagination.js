import React from 'react';
import 'F:/Breaking Bad/src/App.css';

const Pagination = ({totalPages,handleclick}) => {
    const pages =[...Array(totalPages).keys()].map(num=>num+1);
    //console.log(pages);
    return(
        <div className='Pagination'>
            {pages.map(num=>(
            <button
            key={num}
            onClick={() => handleclick(num)}
            >{num}</button>))}
        </div>
    )
}
export default Pagination