---
sidebar_position: 1
---

# useTheme Mode Hook.

Use the **useThemeMode** hook to access to the context values:

- `toggleTheme` → `a function thats switch between light and dark mode`
- `theme` → `object that contains theme values like colors`
- `isDark` → `boolean property that indicates whether we are in dark mode`

## switch between light and dark mode

Import the useThemeMode hook into your app and access the toggleTheme function, then call the function to switch between dark and light modes:

```jsx title="src/App.js"
import { Toggle, Button, useThemeMode } from 'tropix-ui'

export const App = () => {
    const { toggleTheme } = useThemeMode()

    return (<>
          <Toggle onPress={() => toggleTheme())} isThemeSwitch />
          <hr />
          <Button>Some text</Button>     
      </>
    )
}
```

