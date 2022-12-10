import React from 'react'
import './Secondform.scss'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from "prop-types";


export default function Secondform() {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const style = {
        radio: {
            color: 'gold'
        }
    }
  

  return (
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
    </div>
  )
}

Secondform.propTypes = {
    onChange : PropTypes.func.isRequired,
    value: PropTypes.isRequired
}