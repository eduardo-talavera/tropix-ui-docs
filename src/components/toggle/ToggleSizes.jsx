import { Toggle } from "tropix-ui"
import { Wrapper } from "../wrapper/Wrapper"
import { useEffect, useState } from "react";



export const ToggleSizes = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const toggleSizes = ['sm', 'md', 'lg']

  return (
    <Wrapper>
      {
        toggleSizes.map(size => (
            <Toggle
                key={size}
                size={size}
                style={{ margin: '1rem' }}
                onPress={() => {}}
                isToggled
            />
        ))
      }
    </Wrapper>
  )
}


