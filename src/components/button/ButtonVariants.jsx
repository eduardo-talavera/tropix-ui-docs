import { Button } from "tropix-ui";
import { Wrapper } from "../wrapper/Wrapper";
import { useEffect, useState } from "react";

export const ButtonVariants = ({ outline = false, rounded = false }) => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const buttonVariants = ['primary', 'success', 'warning', 'danger'];
 
  return <Wrapper>
    {
        buttonVariants.map((variant) => (
            <Button 
                key={variant} 
                variant={variant}
                outline={outline}
                rounded={rounded}
                style={{ margin: '5px' }}
            >
                {variant}
            </Button>
        ))
    }
  </Wrapper>
};