import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import "./Listelement.css"

const Listelement = (props) => {
  return (
      <div className='list-element'>
          <TaskAltIcon fontSize='inherit' className='tick-icon'/>
          <p>{ props.text}</p>
    </div>
  )
}

export default Listelement