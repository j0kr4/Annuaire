import "../styles/globals.css"
import { AppContextProvider } from "../src/context/State"

function MyApp({ Component, pageProps, ...otherProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} {...otherProps} />
    </AppContextProvider>
  )
}

export default MyApp
