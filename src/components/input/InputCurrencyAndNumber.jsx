import { useState, useEffect } from 'react'
import { Input } from 'tropix-ui'
import { Wrapper } from '../wrapper/Wrapper'

export const InputCurrencyAndNumber = () => {
  
  const [cost, setCost] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;

  return <Wrapper>
      <Input
        type='currency'
        max={100000000}
        onValueChange={(value) => setCost(value)}
        label='Cost'
        name='cost'
        placeholder='Enter the cost'
        wrapperStyles={{ margin: '0.5rem' }}
        value={cost}
      />

      <Input
        type='number'
        onChange={(value) => setQuantity(value)}
        label='Quantity'
        name='quantity'
        placeholder='Enter the quantity'
        wrapperStyles={{ margin: '0.5rem' }}
        value={quantity}
      />
  </Wrapper>
}