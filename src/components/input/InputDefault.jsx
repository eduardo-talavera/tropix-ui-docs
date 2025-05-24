import { useEffect, useState } from "react";
import { Wrapper } from "../wrapper/Wrapper"
import { Input } from 'tropix-ui'

export const InputDefault = 
({ 
    intent = 'initial', 
    errorMessage = '', 
    placeholder = 'enter your name', 
    type = 'text', 
    name = 'name', 
    label = 'Name' 
}) => {

  const [value, setValue] = useState('')
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
      setIsClient(true);
  }, []);
  
  if (!isClient) return null;

  return <Wrapper>
      <Input
        onChange={(value) => setValue(value)}
        label={label}
        name={name}
        type={type}
        intent={intent}
        errorMessage={errorMessage}
        placeholder={placeholder}
        wrapperStyles={{ margin: '0.5rem' }}
        value={value}
      />
  </Wrapper>
}
