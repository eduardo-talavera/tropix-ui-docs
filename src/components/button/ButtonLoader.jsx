import { useEffect, useState } from 'react';
import { Button } from 'tropix-ui'

export const ButtonLoader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '3rem'
    }}>
      <Button
        loader
      >
        Some Text
      </Button>
    </div>
  )
}


