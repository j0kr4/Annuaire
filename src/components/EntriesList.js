import React, { useContext } from "react"
import { Deal } from "./Entry"
import { AppContext } from "../context/State"

const EntriesList = () => {
  const { deals } = useContext(AppContext)

  return (
    <>
      <td>
        {deals.map((deals) => (
          <Deal key={deals.amount} deals={deals} />
        ))}
      </td>
    </>
  )
}

export default EntriesList
