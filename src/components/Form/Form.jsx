import React, { useState } from 'react'
import './Form.scss'
import PropTypes from "prop-types";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'


export default function Form() {

  const [textArea, settextArea] = useState('')
  const [textAreaError, setTextAreaError] = useState ('')
  const [value, setValue] = useState('');
  const [valueError, setValueError] = useState('');
  const [vat, setVat] = useState('');
  const [vatError, setvatError] = useState('')
  const [netto, setNetto] = useState('')
  const [nettoError, setNettoError] = useState('')
  const [disabled, setDistabled] = useState(true)


  const numberOfCharacters = 250
  const difference = numberOfCharacters - textArea.length
  let navigate = useNavigate()
  
  const firstInput = (e) => {
    e.preventDefault()
    settextArea(e.target.value)
    
}

const blockadeText = (e) => {
  
  if (difference < 0 || difference === 0 || e.keyCode === 8) {
      e.preventDefault()
      const firstform__underarea = document.querySelector('.firstform__underarea')
      firstform__underarea.innerHTML = `"You can't enter more than 255 characters`
      firstform__underarea.style.color = 'red'
      firstform__underarea.style.textAlign = 'center'
      firstform__underarea.style.fontWeight = 'bold'
  }
}

const handleChange = (event) => {
  setValue(event.target.value);
};


const handleChangeVat = (event) => {
  setVat(event.target.value);
  
  if (vat === 19 || vat === 21 || vat === 23 || vat === 25 || vat === '') {
      setDistabled(false)
     }
     console.log(vat)
};

const isValidNumber = (e) => {
  const numberText = document.querySelector('.fourthform__numberText')

   if (e.key === "." || e.key === ",") {
      numberText.innerHTML = ''
      return true 
      
  }

  else if (isNaN(parseInt(e.key, 10))) {
      console.log(e.key)
      e.preventDefault()
      numberText.innerHTML = '“Please, input number”'    
  }

  else {
      console.log(e.key)
      numberText.innerHTML = ''
      return true
  }
}

const nettoEuro = (e) => {
  e.preventDefault()
  setNetto(e.target.value)
  
}

const firstWalidation = (e) => { 
    if (textArea === "") {
      e.preventDefault()
      setTextAreaError(`Text is required`)
    }
    else {
      setTextAreaError('')
    }

 }

 const secondWalidation = (e) => { 
  if (value === "") {
    e.preventDefault()
    setValueError(`Radio button is required`)
  }
  else {
    setValueError('')
  }
}

const thirdWalidation = (e) => { 
  if (vat === "") {
    e.preventDefault()
    setvatError(`Vat is required`)
  }
  else {
    setvatError('')
  }
}

const fourthWalidation = (e) => { 
  if (netto === "") {
    e.preventDefault()
    setNettoError(`Price netto EUR is required`)
  }
  else {
    setNettoError('')
  }
}

const sendAjax = () => {
  const xhr = new XMLHttpRequest()
  xhr.onload = function () {
    if (this.status === 200) {
      const res = JSON.stringify({status: 'Success'});
      console.log(res)
    }
  }
  xhr.open('GET', `success.json`, true)
  xhr.send()
}

const walidationForm = (e) => {
  firstWalidation(e)
  secondWalidation(e)
  thirdWalidation(e)
  fourthWalidation(e)
  if (textArea !== "" && value !== "" && vat !== "" && netto !== "") {
    navigate('/form_app/success')
    sendAjax()
    
  }
}

const style = {
  area: {
      minWidth: '100%', maxWidth: '100%', minHeight: '80%',maxHeight: '100%', borderRadius: '8px', border: '1px solid gold'
  }, 
  radio: {
    color: 'gold'
  }, 
  vat: {
    borderRadius: '8px', border: '1px solid gold', paddingLeft: '32px', width: '120px'
  }, 
  menuitem: {
    paddingLeft: '32px'
  },
  eur:  {
    borderRadius: '8px', border: '1px solid gold', width: '120px'
  }, 
  btn: {
    backgroundColor: 'gold'
  }
}



  return (
    <div>
        <form className='form'>
            <div className="form__wrapper">

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
                  <div className='textareaerror'>{textAreaError}</div>
              </div>


                  <div className='secondform'>
                  <div className="secondform__radio">
                  <FormControl>
                  <FormLabel id="secondform">Send confirmation</FormLabel>
                  <RadioGroup
                      aria-labelledby="secondform"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange}
                  >
                      <FormControlLabel value="yes" control={<Radio style={style.radio}/>} label="yes" />
                      <FormControlLabel value="no" control={<Radio style={style.radio} />} label="no" />
                  </RadioGroup>
                  </FormControl>
                  </div>
                  <div className='textareaerror'>{valueError}</div>
              </div>

              <div className="thirdform">
            <div className="thirdform__vat">
            <FormControl >
                <InputLabel id="thirdform"
                >Vat</InputLabel>
                <Select
                className='thirdform'
                labelId="thirdform"
                id="thirdform"
                value={vat}
                label="Vat"
                onChange={handleChangeVat}
                style={style.vat}
                >
                <MenuItem value={19}>19%</MenuItem>
                <MenuItem value={21}>21%</MenuItem>
                <MenuItem value={23}>23%</MenuItem>
                <MenuItem value={25}>25%</MenuItem>
                </Select>
                <FormHelperText>Choose VAT</FormHelperText>
            </FormControl>
            <div className='textareaerror'>{vatError}</div>
            </div>
        </div>

        <div className="fourthform">
            <div className="fourthform__inputEur">
                    <TextField
                style={style.eur}
                label="Price netto EUR"
                id="outlined-start-adornment"
                disabled={disabled}
                onChange={nettoEuro}
                onKeyPress={e=>isValidNumber(e)}
                InputProps={{
                    startAdornment: <InputAdornment 
                    position="start">EUR</InputAdornment>,
                }}
                />
                <div className='fourthform__numberText'></div>
            </div>
            <div className='textareaerror'>{nettoError}</div>
        </div>


        <div className="fifthform">
        <div className="fifthform__inputEurbrutto">
                <TextField
                style={style.eur}
                label="Price brutto EUR"
                id="outlined-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start">EUR</InputAdornment>,
                }}
                value={vat.value === "" || netto === "" ? "wait" : ((100 + vat) * parseFloat(netto)) / 100}
                />
                
        </div>
        </div>

        <div className="sixthform">
        <Button 
        style={style.btn}
        onClick={walidationForm}
        variant="contained">Submit</Button>
        </div>
            </div>
        </form>
    </div>
  )
}

Form.propTypes = {
  textArea : PropTypes.string.isRequired, 
  value: PropTypes.isRequired,
  vat: PropTypes.isRequired,
  netto: PropTypes.isRequired,
  onChange : PropTypes.func.isRequired
  
}