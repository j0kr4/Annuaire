import { deepmerge } from "deepmerge"
import { createContext, useCallback, useState } from "react"

const defaultState = {
  deals: [
    {
      description: "",
      amount: 0,
    },
  ],
}

const AppContext = createContext(defaultState)

export const AppContextProvider = ( children ) => {
  const [state, setState] = useState(defaultState)

  const addDeal = useCallback(() => {
    setState((currentState) =>
      deepmerge(currentState, {
        deals: currentState.deals.amount + state.amount,
      })
    )
  })

  return (
    <AppContext.Provider {...children} value={{ deals: state.deals, addDeal }}/>
  )
}

export default AppContext
