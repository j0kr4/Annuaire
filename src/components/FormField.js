import { Field } from "formik"
import Button from "./Button"

const FormField = (props) => {
  const {
    children,
    className,
    helper: Helper,
    as: Component = Button,
    ...otherProps
  } = props

  return (
    <Field {...otherProps}>
      {({ field, meta, meta: { touched, error } }) => (
        <div className={className}>
          <label className="block">
            {children}
            <Component className="w-full" {...field} {...otherProps} />
          </label>
          {touched && error ? (
            <p className="text-red-500 p-2 text-sm">{error}</p>
          ) : null}
          {Helper ? <Helper field={field} meta={meta} /> : null}
        </div>
      )}
    </Field>
  )
}

export default FormField
