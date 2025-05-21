import { ThemeProvider } from 'tropix-ui';


// Default implementation, that you can customize
export default function Root({children}) {
 
    return <ThemeProvider>{children}</ThemeProvider>
}



