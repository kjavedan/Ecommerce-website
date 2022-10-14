import React from 'react'
import { StyledCheckbox, Label , Input } from '../styles/Checkbox.styled'

const Checkbox = ({icon, title}) => {
  return (
    <StyledCheckbox>
      <Input id={title}/>
      <Label htmlFor={title}>
        {icon}
        <span>{title}</span>
        </Label>
    </StyledCheckbox>
  )
}

export default Checkbox