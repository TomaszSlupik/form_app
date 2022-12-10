import React from 'react'
import Formcalculations from '../Formcalculations/Formcalculations'
import Formtext from '../Formtext/Formtext'
import './Form.scss'


export default function Form() {
  return (
    <div>
        <form className='form'>
            <div className="form__wrapper">
                <Formtext />
                <Formcalculations />
            </div>
        </form>
    </div>
  )
}
