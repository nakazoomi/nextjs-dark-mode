import { ThemeProvider } from 'next-themes';
// Global styles
import '../sass/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
