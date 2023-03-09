import React, { useState } from 'react'

const FunctionalComponent = (props) => {
 
  return (
    
    <div >
         
          <fieldset>
           
              <h1>{props.lastName}, {props.firstName}</h1>
               <p>Age: {props.age}</p>
               <p>Hair Color: {props.hairColor}</p>
          </fieldset>
          
    </div>
  )
}

export default FunctionalComponent