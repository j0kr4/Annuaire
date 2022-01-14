import "../styles/globals.css"

function MyApp({ Component, pageProps, ...otherProps }) {
  return <Component {...pageProps} {...otherProps} />
}

export default MyApp
