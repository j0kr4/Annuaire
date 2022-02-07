import classNames from "classnames"

const className = "font-bold"
const color = {
  primary: "bg-blue-600 dark:bg-pink-600 text-white disabled:bg-blue-300",
}
const sizes = {
  md: "py-1.5 px-3 text-md",
}

const Button = (props) => {
  const { colors = "primary", size = "md", ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={classNames(className, colors[color], sizes[size])}
    />
  )
}

export default Button
