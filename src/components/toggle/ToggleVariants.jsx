import { Toggle } from "tropix-ui"
import { Wrapper } from "../wrapper/Wrapper"
import { useEffect, useState } from "react";


export const ToggleVariants = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const toggleVariants = ['jungleGreen', 'cobaltBlue', 'poppy', 'sunGlow']

  return (
    <Wrapper>
      {
        toggleVariants.map(variant => (
            <Toggle
                key={variant}
                variant={variant}
                style={{ margin: '1rem' }}
                onPress={() => {}}
                isToggled
            />
        ))
      }
    </Wrapper>
  )
}


