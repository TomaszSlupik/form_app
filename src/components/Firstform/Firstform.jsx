import React, { useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './Firstform.scss'
import PropTypes from "prop-types";

export default function Firstform() {

    const [textArea, settextArea] = useState('')

    const numberOfCharacters = 250

    const firstInput = (e) => {
        e.preventDefault()
        settextArea(e.target.value)
        
    }
    const difference = numberOfCharacters - textArea.length

    const blockadeText = (e) => {
        if (difference < 0 || difference === 0) {
            e.preventDefault()
            const firstform__underarea = document.querySelector('.firstform__underarea')
            firstform__underarea.innerHTML = `Text is required", "You can't enter more than 255 characters`
            firstform__underarea.style.color = 'red'
            firstform__underarea.style.textAlign = 'center'
            firstform__underarea.style.fontWeight = 'bold'

        }
    }

    

    const style = {
        area: {
            minWidth: '100%', maxWidth: '100%', minHeight: '80%',maxHeight: '100%', borderRadius: '8px', border: '1px solid gold'
        }
    }

  return (
    <div>
        <div className="firstform">
            <div className="firstform__area">
                <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Description"
                onChange={firstInput}
                onKeyPress={blockadeText}
                style={style.area}
                />
            </div>
            <div className="firstform__underarea"
            onChange={firstInput}>
                Number of characters to enter:<span> {difference}</span>
            </div>
        </div>
    </div>
  )
}

Firstform.propTypes = {
    textArea : PropTypes.string.isRequired
}