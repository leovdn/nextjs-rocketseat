import GlobalStyle from "../styles/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />      
    </>
  )
}
