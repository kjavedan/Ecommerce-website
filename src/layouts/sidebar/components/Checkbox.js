import React, { useContext } from 'react'
import { Context } from '../../../context/uiContext'
import { StyledCheckbox, Label , Input } from '../styles/Checkbox.styled'

const Checkbox = ({icon, title}) => {

  const {theme} = useContext(Context)

  return (
    <StyledCheckbox>
      <Input id={title}/>
      <Label htmlFor={title}  theme={theme}>
        <i className={icon}></i>
        <span>{title}</span>
        </Label>
    </StyledCheckbox>
  )
}

export default Checkbox