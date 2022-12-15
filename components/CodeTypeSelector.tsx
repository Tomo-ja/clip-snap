import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { CodeType } from '../helpers/enums'

const CodeTypeSelector = () => {
  const [codeType, setCodeType] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setCodeType(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, mr: 0, width: 130}} size="small">
      <InputLabel id="demo-select-small">Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={codeType}
        label="Type"
        onChange={handleChange}
      >
        {Object.values(CodeType).map(value => 
          <MenuItem key={value} value={value}>{value}</MenuItem>
        )}
      </Select>
    </FormControl>
  )
}

export default CodeTypeSelector