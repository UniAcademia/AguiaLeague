import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Menu } from 'components/Menu';
import { Inicial } from 'components/Inicial';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Menu/>
    {/* <Component {...pageProps} />; */}
    <Inicial></Inicial>
    </>
  )
}

export default MyApp;
