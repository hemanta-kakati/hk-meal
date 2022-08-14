import React from 'react'

const reducer = (state, action) => {
  return (
    switch (action.type) {
        case "value":
            console.log();
            break;
    
        default:
            break;
    }
  )
}

export default reducer