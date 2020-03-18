import React from 'react'
import logo from './user.png'


function Search({ handleInput, search }) {
    return (
    

    <section className="searchbox-wrapper">

           <input type="text" 
            placeholder="Search for Movie!!" 
            className="searchBox"
            onChange={handleInput}
            onKeyPress={search}
            
            />

        
        </section>
    
        
    )
}
export default Search
