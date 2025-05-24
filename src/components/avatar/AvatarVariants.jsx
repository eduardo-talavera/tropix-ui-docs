import { useEffect, useState } from 'react';
import { Avatar } from 'tropix-ui'
import { Wrapper } from '../wrapper/Wrapper';

export const AvatarVariants = () => {
  const [isClient, setIsClient] = useState(false);
  const variants = ['jungleGreen', 'cobaltBlue', 'poppy', 'sunGlow'];
    
  useEffect(() => {
    setIsClient(true);
  }, []);
    
  if (!isClient) return null;

  return (
    <Wrapper>
       {
        variants.map(variant => (
          <Avatar
              key={variant}
              variant={variant}
              style={{ margin: '0.5rem' }}
          >
              ET
          </Avatar>
        ))
      }
    </Wrapper>
  );
}
