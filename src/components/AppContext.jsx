import { createContext, useCallback, useState } from "react"

const initialState = {
  entries: [
    { name: "Potter", firstName: "Harry", adress: "125 Avenue de Poudlard", email: "harrypotter@gmail.com", age: "35" },
    { name: "Dumbeldor", firstName: "Albus", adress: "Tour de Poudlard", email: "albus.poudlard@gmail.com", age: "112" },
    { name: "Franck", firstName: "Heinstein", adress: "17 bis rue des cauchemard", email: "francky@gmail.com", age: "485" },
    { name: "Parker", firstName: "Petter", adress: "17 Boulevard de New York", email: "spiderman@gmail.com", age: "24" },
    { name: "Uzumaki", firstName: "Naruto", adress: "Konoha", email: "naruto7@gmail.com", age: "17" },
  ],
}

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  const addEntry = useCallback(({ name, firstName, adress, email, age }) => {
    setState((currentState) => ({
      ...currentState,
      entries: [...currentState.entries, { name, firstName, adress, email, age }],
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