import React from 'react'
import data from 'utils/careerpath.json'
function Box() {
  return (
    <div>
      {data.career.map(c => (
        <container>{c.title}</container>
      ))}
      <h1></h1>
    </div>
  )
}

export default Box
