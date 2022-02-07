import { useContext } from "react"
import AppContext from "./AppContext"

const InOut = () => {
  const { deals } = useContext(AppContext)
  const amounts = deals.map((deal) => deal.amount)
  const incoming = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const outgoing = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)

  return (
    <div>
      <div>
        <h3>Incoming</h3>
        <p className="green">{incoming}</p>
      </div>
      <div>
        <h3>Outgoing</h3>
        <p className="red">{outgoing}</p>
      </div>
    </div>
  )
}

export default InOut
