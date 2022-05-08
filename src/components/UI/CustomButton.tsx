import React, { FC } from 'react'
import '../../styles/custombtn.scss'
interface ICustomButtonProps {
    onClick?: () => void
    children: any
}

export const CustomButton:FC<ICustomButtonProps> = ({onClick, children}) => {
  return (
    <button className='custom-btn' onClick={onClick}>{children}</button>
  )
}
