import React from 'react'
import Alert from '@mui/material/Alert'
import './Success.scss'

export default function Success() {
  return (
    <div>
         <form className='success'>
            <div className="success__wrapper">
            <div className="success__wrapper-box">
                <Alert severity="success">Congratulation — your message send!</Alert>
            </div> 
            </div>
        </form>
    </div>
  )
}
