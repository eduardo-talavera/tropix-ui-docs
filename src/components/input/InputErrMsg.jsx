import { useEffect, useState } from 'react'
import { Input } from 'tropix-ui'
import { REG_EXS } from '../../utils/constants'
import { Wrapper } from '../wrapper/Wrapper'

export const InputErrMsg = () => {
  const [value, setValue] = useState('someone.email.com')
  const [isClient, setIsClient] = useState(false);
  const [errMsg, setErrMsg] = useState('Invalid email format')

  const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
     REG_EXS.email
    )
  }

  const handleChange = (value) => {
    const isValidEmail = validateEmail(value)
    setValue(value)
    if (!isValidEmail) setErrMsg('Invalid email format.')
    else setErrMsg('')  
  }

  useEffect(() => {
    setIsClient(true);
  }, []);
    
  if (!isClient) return null;

  return <Wrapper>
      <Input
        onChange={(value) => handleChange(value)}
        label='Email'
        name='email'
        intent={errMsg ? 'error' : 'success'}
        errorMessage={errMsg}
        placeholder='Enter your name'
        wrapperStyles={{ margin: '0.5rem' }}
        value={value}
      />
  </Wrapper>
}