import React from 'react'

const Search = ({handleChange}) => {
  return (
    <div>
        <label>Search...</label>
    <input type="search" onChange={handleChange}  placeholder="Search..."/>
  </div>
  )
}

export default Search;