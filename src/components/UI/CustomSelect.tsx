import React, { FC, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../../styles/customSelect.scss'
interface ICustomSelectProps {
  label?: string;
  id?: string;
  width?: number;
  value: string | number;
  onChange: (...args:any) => void;
  options: IOptions[] | null
  className?: string
}
export interface IOptions {
  text:string;
  value:string
}

export const CustomSelect:FC<ICustomSelectProps> = ({label, id, width, value, onChange, options, className = ''}) => {
    const uid = useMemo(() => {
        return id || uuidv4()
    }, [id])

  return (
    <div className={'custom-select ' + className}>
        {label && <label htmlFor={uid}>{label}</label>}
        <select id={uid} value={value} onChange={onChange} style={{width: width ? `${width}px` : 'fit-content'}} data-testid='custom-select'>
          {options?.map(option => {
            return (
              <option value={option.value} key={option.value}>{option.text}</option>
            )
          })}
        </select>
    </div>
  )
}
