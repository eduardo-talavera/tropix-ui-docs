import { ThemeProvider } from 'tropix-ui';
import useIsBrowser from '@docusaurus/useIsBrowser';

// Default implementation, that you can customize
export default function Root({children}) {
    const isBrowser = useIsBrowser(); 

    return (isBrowser) && <ThemeProvider>{children}</ThemeProvider>
}



