import { useEffect, useState } from "react"
import { Wrapper } from "../wrapper/Wrapper"
import { Input } from 'tropix-ui'

export const InputSizes = () => {
  const sizes = ['sm', 'md', 'lg']

  const [value, setValue] = useState('')
  const [isClient, setIsClient] = useState(false);
    
  useEffect(() => {
      setIsClient(true);
  }, []);
    
  if (!isClient) return null;

  return <Wrapper>
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        {
          sizes.map(size => (
            <Input
              key={size}
              type="search"
              size={size}
              onChange={(value) => setValue(value)}
              label={size}
              name='search'
              placeholder='Search'
              wrapperStyles={{ margin: '0.5rem' }}
              value={value}
            />
        ))
        }
    </div>
  </Wrapper>
}