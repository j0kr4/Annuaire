import classNames from "classnames"

const Journal = (props) => {
  const { entries, className, ...otherProps } = props

  return (
    <table
      {...otherProps}
      className={classNames(className, "table-fixed w-full border-separate border border-gray-400")}
    >
      <thead>
        <tr className="font-bold">
          <th className="p-2 border-r">Name</th> 
          <th className="p-2 border-r">First Name</th>
          <th className="p-2 border-r">Adress</th>
          <th className="p-2 border-r">Email Adress</th>
          <th className="p-2 border-r">Age</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(({ name, firstName, adress, email, age }, index) => (
          <tr key={index} className={classNames({ "bg-slate-100": index % 2 })}>
            <>
              <td className="text-left p-2">
                <span className="font-bold">
                  {name}
                </span>
              </td>
            </>
            <>
              <td className="text-left p-2">
                <span className="font-bold">
                  {firstName}
                </span>
              </td>
            </>
            <>
              <td className="text-left p-2">
                <span className="font-bold">
                  {adress}
                </span>
              </td>
            </>
            <>
              <td className="text-left p-2">
                <span className="font-bold">
                  {email}
                </span>
              </td>
            </>
            <>
              <td className="text-left p-2">
                <span className="font-bold">
                  {age}
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

