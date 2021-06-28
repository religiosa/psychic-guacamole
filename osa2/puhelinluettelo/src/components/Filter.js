import React from 'react'

const Filter = (props) => {
  return (
    <p>
      filter shown with <input 
        value={props.filterText} 
        onChange={props.handleFilterChange}
      />
    </p>
  )
}

export default Filter
