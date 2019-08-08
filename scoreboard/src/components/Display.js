import React from 'react';

const Display = props => {
  return (
    <>
      <h2>This at bat:</h2>
      <h3>{props.strikes}</h3>
      <h3>{props.balls}</h3>
    </>
  )
}

export default Display;