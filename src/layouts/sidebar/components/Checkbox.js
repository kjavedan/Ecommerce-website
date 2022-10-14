import React from 'react'
import { StyledCheckbox, Label , Input } from '../styles/Checkbox.styled'

const Checkbox = ({icon, title}) => {
  return (
    <StyledCheckbox>
      {icon}
      <Label htmlFor={title}>{title}</Label>
      <Input id={title}/>
    </StyledCheckbox>
  )
}

export default Checkbox