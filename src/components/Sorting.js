import React from 'react'


const Sorting = (props)=>{

  return (

    <div  style={{display:"block", textAlign:"center",marginBottom:"1.5em"}} className={"ui sixteen wide column"}>
        <select onChange={props.handleChange}>
          <option value="All">All</option>
          <option value="Greased">Greased</option>
          <option value="NameASC">Name (A-Z)</option>
          <option value="NameDESC">Name (Z-A)</option>
          <option value="WeightASC">Weight (Lowest to Highest) </option>
          <option value="WeightDESC">Weight (Highest to Lowest) </option>
        </select>
    </div>
  )

}

export default Sorting