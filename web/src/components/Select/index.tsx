import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string
    options: Array<{
        value: string
        label: string
    }>
}

const Select: React.FC<SelectProps> = ({ name, label, options,...selectProps}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select defaultValue="" id={name} {...selectProps} >
                <option value="" disabled hidden>Selecione uma opção</option>

                {options.map(option => (
                    <option
                        value={option.value}
                        key={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select