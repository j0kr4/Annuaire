import { createContext, useCallback, useState } from "react"
import { deepmerge } from "deepmerge"

const defaultState = {
  deals: [
    {
      description: "",
      amount: 0,
    },
  ],
}

const AppContext = createContext(defaultState)

export const AppContextProvider = (children) => {
  const [state, setState] = useState(defaultState)

  const addDeal = useCallback(() => {
    setState((currentState) =>
      deepmerge(currentState, {
        deals: currentState.deals.amount + state.deals.amount,
      })
    )
  }, [state.deals.amount])

  return <AppContext.Provider {...children} value={{ state, addDeal }} />
}

export default AppContext
