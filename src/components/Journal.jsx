import classNames from "classnames"

const Journal = (props) => {
  const { entries, className, ...otherProps } = props

  return (
    <table
      {...otherProps}
      className={classNames(className, "table-fixed w-full")}
    >
      <thead>
        <tr className="font-bold">
          <th className="p-2 border-r">Name</th>
          <th />   
          <th className="p-2">First Name</th>
          <th /> 
          <th className="p-2">Adress</th>
          <th /> 
          <th className="p-2">Email Adress</th>
          <th /> 
          <th className="p-2">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(({ name, firstName, adress, email, number }, index) => (
          <tr key={index} className={classNames({ "bg-slate-100": index % 2 })}>
            <>
              <td className="text-left p-2">
                <span className="font-bold">
                  {name}
                </span>
              </td>
              <td />
            </>
            <>
              <td />
              <td className="text-left p-2">
                <span className="font-bold">
                  {firstName}
                </span>
              </td>
            </>
            <>
              <td />
              <td className="text-left p-2">
                <span className="font-bold">
                  {adress}
                </span>
              </td>
            </>
            <>
              <td />
              <td className="text-left p-2">
                <span className="font-bold">
                  {email}
                </span>
              </td>
            </>
            <>
              <td />
              <td className="text-left p-2">
                <span className="font-bold">
                  {number}
                </span>
              </td>
            </>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Journal

