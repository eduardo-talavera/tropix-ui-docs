import { useState } from "react"
import { Toggle } from "tropix-ui"


export const SingleToggle = ({ isThemeSwitch = false }) => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem'
    }}>
        <Toggle 
             isThemeSwitch={isThemeSwitch} 
             onPress={(toggled) => setIsToggled(toggled)}
        />

        <p>{ isToggled ? 'Toggled On' : 'Toggled Off' }</p>
    </div>
  )
}


