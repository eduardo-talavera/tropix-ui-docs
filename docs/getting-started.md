---
sidebar_position: 1
---

# Getting Started



step 1 installation

```shell
npm i tropix-ui @emotion/react @emotion/styled
```


step 2 import the provider into your root file
```jsx title="src/main.js"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'tropix-ui'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
        {/* your app here */}
    </ThemeProvider>
  </StrictMode>,
```

step 3 use your desired component into your application
```jsx title="src/App.jsx"
import { Button } from 'tropix-ui'

export const App = () => {

    return (<>
        <Button>Some text</Button>     
    </>)
}
```
