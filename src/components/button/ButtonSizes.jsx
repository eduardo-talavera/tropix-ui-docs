import { Button } from "tropix-ui";
import { Wrapper } from "../wrapper/Wrapper";

export const ButtonSizes = () => {
  
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