import { useEffect, useState } from 'react'
import { Wrapper } from "../wrapper/Wrapper"
import { Input } from 'tropix-ui';

export const InputIntents = () => {
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState('')  
  const intents = ['initial', 'success', 'error', 'info']

  useEffect(() => {
        setIsClient(true);
  }, []);
    
  if (!isClient) return null;

  return <Wrapper>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {
            intents.map(intent => (
                <Input
                key={intent}
                intent={intent}
                onChange={(value) => setValue(value)}
                label={intent}
                name='lastname'
                placeholder='Enter your last name'
                wrapperStyles={{ margin: '1rem' }}
                value={value}
                />
            ))
        }
    </div>
  </Wrapper>
}
