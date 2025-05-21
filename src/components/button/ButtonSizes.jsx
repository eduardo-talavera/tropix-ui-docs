import { Button } from "tropix-ui";
import { Wrapper } from "../wrapper/Wrapper";
import { useEffect, useState } from "react";

export const ButtonSizes = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  
  const sizes = ['sm', 'md', 'lg', 'full'];
 
  return <Wrapper>
    <div style={{display: 'flex', flexDirection: 'column', width: '90%' }}>
        {
          sizes.map((size) => (
              <Button 
                  key={size} 
                  size={size}
                  style={{ margin: '5px' }}
              >
                  { size }
              </Button>
          ))
        }
    </div>
  </Wrapper>
};