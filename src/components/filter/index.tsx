import React from 'react'
import SearchBar from "./searchbar"
import Year from './year'

const  Filter = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width">
      <div className="home-text-container">
        <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
        <p>Beğenebileceğin arabaları keşfet</p>
      </div>

        <div className="home-filters">
       <SearchBar/>

    <div className="home-filter-container">
      <Year/>
    </div>
        </div>
    </div>
  )
}

export default Filter
