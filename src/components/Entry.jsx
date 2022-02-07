import React from "react"

const Deal = ({ deal }) => {
  const sign = deal.amount > 0 ? "+" : "-"

  return (
    <tbody>
      <tr>
        <td className={deal.amount > 0 ? "green" : "red"}>
          {deal.description}{" "}
          <span>
            {sign}€{deal.amount}
          </span>
        </td>
      </tr>
    </tbody>
  )
}
export default Deal
