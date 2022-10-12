import React from 'react'
import { StyledCheckbox, Label , Input } from '../styles/Checkbox.styled'

const Checkbox = () => {
  return (
    <StyledCheckbox>
      <Input id='cb1'/>
      <Label htmlFor='cb1'>checkbox</Label>
    </StyledCheckbox>
  )
}

export default Checkbox