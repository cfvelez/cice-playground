import React from 'react'
import styles from './text-input.module.css'
import { bind } from '../../../../utils/bind'

const cx = bind(styles)

interface Props {
  label: string
  value: string
  required?: boolean
  onChange(value: string): void
  onBlur(): void
}

export const TextInput: React.FunctionComponent<Props> = ({ required, label, value, onChange }) => {
  const change = (text: String) => text.length === 0

  return (
    <label>
      {label}
      <input
        required
        className={cx('input')}
        onChange={event => onChange(event.target.value)}
        onBlur={event => onblur(ev)}
        value={value}
      />
    </label>
  )
}
