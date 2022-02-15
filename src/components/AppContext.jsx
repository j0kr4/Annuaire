import { createContext, useCallback, useState } from "react"

const initialState = {
  entries: [
    { name: "Potter", firstName: "Harry", adress: "125 Avenue de Poudlard", email: "harrypotter@gmail.com", number: "0650957435" },
    { name: "Dumbeldor", firstName: "Albus", adress: "Tour de Poudlard", email: "albus.poudlard@gmail.com", number: "0650486298" },
    { name: "Franck", firstName: "Heinstein", adress: "17 bis rue des cauchemard", email: "francky@gmail.com", number: "0650569218" },
    { name: "Parker", firstName: "Petter", adress: "17 Boulevard de New York", email: "spiderman@gmail.com", number: "067894524" },
    { name: "Uzumaki", firstName: "Naruto", adress: "Konoha", email: "naruto7@gmail.com", number: "0612385248" },
  ],
}

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  const addEntry = useCallback(({ name, firstName, adress, email, number }) => {
    setState((currentState) => ({
      ...currentState,
      entries: [...currentState.entries, { name, firstName, adress, email, number }],
    }))
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{ entries: state.entries, addEntry }}
    />
  )
}

export default AppContext