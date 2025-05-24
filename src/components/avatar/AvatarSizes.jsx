import { useEffect, useState } from 'react';
import { Avatar } from 'tropix-ui'
import { Wrapper } from '../wrapper/Wrapper';

export const AvatarSizes = () => {
  const [isClient, setIsClient] = useState(false);
    
  useEffect(() => {
    setIsClient(true);
  }, []);
    
  if (!isClient) return null;

  return (
    <Wrapper>
      <Avatar size="sm" src="https://i.pravatar.cc/100" style={{ margin: '0.5rem' }} />
      <Avatar size="md" src="https://i.pravatar.cc/100" style={{ margin: '0.5rem' }} />
      <Avatar size="lg" src="https://i.pravatar.cc/100" style={{ margin: '0.5rem' }} />
    </Wrapper>
  );
}