import React, { useState }from 'react'
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import './Formcalculations.scss'

export default function Formcalculations() {

    const [vat, setVat] = useState('');
    const [netto, setNetto] = useState('')
    const [disabled, setDistabled] = useState(true)

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
    console.log(((100 + vat) * parseFloat(netto)) / 100)


    const style = {
        vat: {
            borderRadius: '8px', border: '1px solid gold', paddingLeft: '32px', width: '120px'
        }, 
        menuitem: {
            paddingLeft: '32px'
        },
        eur:  {
            borderRadius: '8px', border: '1px solid gold', width: '120px'
        }
    }



  return (
    <div>
     
    
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
                value={((100 + vat) * parseFloat(netto)) / 100}
                />
                
        </div>
        </div>


    </div>
  )
}


Formcalculations.propTypes = {
    onChange : PropTypes.func.isRequired,
}