import { Toggle } from "tropix-ui"
import { Wrapper } from "../wrapper/Wrapper"

const toggleSizes = ['sm', 'md', 'lg']

export const ToggleSizes = () => {
  return (
    <Wrapper>
      {
        toggleSizes.map(size => (
            <Toggle
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


