
import { ThemeProvider } from 'tropix-ui';
import useIsBrowser from '@docusaurus/useIsBrowser';

// Default implementation, that you can customize
export default function Root({children}) {
  const isBrowser = useIsBrowser();
  if (!isBrowser) return 'Loading...'
  return <ThemeProvider>{children}</ThemeProvider>
}



