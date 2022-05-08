import React, { FC, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../../styles/textinput.scss'
interface ITextInputProps {
    label?: string;
    id?: string;
    placeholder?: string;
    width?: number;
    value: string | number;
    type?: string,
    onChange: (...args:any) => void
}

export const TextInput:FC<ITextInputProps> = ({label, id, placeholder, width, value, type = 'text', onChange}) => {

    const uid = useMemo(() => {
        return id || uuidv4()
    }, [id])

  return (
    <div className='text-input'>
        {label && <label htmlFor={uid}>{label}</label>}
        <input type={type} id={uid} placeholder={placeholder} style={{width: `${width}px`}}  value={value} onChange={onChange} data-testid='text-input' />
    </div>
  )
}
