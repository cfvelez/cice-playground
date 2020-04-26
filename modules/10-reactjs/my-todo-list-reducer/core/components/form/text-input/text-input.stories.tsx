import React, { useState } from 'react'
import { TextInput } from './text-input'

export default {
  title: 'TextInput',
  component: TextInput
}

const WithState: React.FC<{ isRequired: boolean }> = ({ isRequired }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <TextInput
        required={isRequired}
        value={value}
        label="My input"
        onChange={setValue}
        onBlur={value}
      ></TextInput>
    </>
  )
}

export const base = () => <WithState isRequired={false} />
export const required = () => <WithState isRequired={true} />
