import { useContext } from "react"
import { AppContext } from "../context/State"

export const Total = () => {
  const { deals } = useContext(AppContext)
  const amounts = deals.map((deal) => deal.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <>
      <h4>Total : </h4>
      <p>{total} €</p>
    </>
  )
}
