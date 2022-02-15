import classNames from "classnames"

const Journal = (props) => {
  const { entries, className, ...otherProps } = props

  return (
    <table
      {...otherProps}
      className={classNames(className, "table-fixed w-full")}
    >
      <thead>
        <tr className="border-b-2 font-bold">
          <th className="p-2 border-r">Name</th>   
        </tr>
        <tr>
          <th className="p-2">First Name</th>
        </tr>
        <tr>
          <th className="p-2">Adress</th>
        </tr>
        <tr>
          <th className="p-2">Email Adress</th>
        </tr>
        <tr>
          <th className="p-2">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(({ name, firstName, adress, email, number }, index) => (
          <tr key={index} className={classNames({ "bg-slate-100": index % 2 })}>
            {name ? (
              <>
                <td className="text-right p-2 border-r">
                  <span className="font-bold text-green-500">
                    {name}
                  </span>
                </td>
                <td />
              </>
            ) :firstName ? (
              <>
                <td />
                <td className="text-right p-2 border-l">
                  <span className="font-bold text-red-500">
                    {firstName}
                  </span>
                </td>
              </>
            ) :adress ? (
              <>
                <td />
                <td className="text-right p-2 border-l">
                  <span className="font-bold text-red-500">
                    {firstName}
                  </span>
                </td>
              </>
            ) :email ? (
            <>
              <td />
              <td className="text-right p-2 border-l">
                <span className="font-bold text-red-500">
                  {firstName}
                </span>
              </td>
            </>
            ) : (
            <>
              <td />
              <td className="text-right p-2 border-l">
                <span className="font-bold text-red-500">
                  {number}
                </span>
              </td>
            </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Journal

