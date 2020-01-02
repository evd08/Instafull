import React, { useState } from 'react';

export default function Comment(props){
  return (
    <div>
      <button className="delete-button">Delete</button>
      <button>Cancel</button>
    </div>
  )
}