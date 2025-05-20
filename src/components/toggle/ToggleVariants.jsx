import { Toggle } from "tropix-ui"
import { Wrapper } from "../wrapper/Wrapper"

const toggleVariants = ['jungleGreen', 'cobaltBlue', 'poppy', 'sunGlow']


export const ToggleVariants = () => {
  return (
    <Wrapper>
      {
        toggleVariants.map(variant => (
            <Toggle
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


