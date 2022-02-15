import AppContext from "../../src/components/AppContext"
import Button from "../../src/components/Button"
import FormField from "../../src/components/FormField"
import Textarea from "../../src/components/Textarea"
import {
  nameValidator,
  firstNameValidator,
} from "../../src/validators/validators"
import { Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"

const { default: Page } = require("../../src/components/Page")

const initialValues = {
  name: 0,
  firstName: "",
}
const validationSchema = yup
  .object()
  .shape({
    name: nameValidator.required(),
    firstName: firstNameValidator.required(),
  })
  .required()

const AddEntryPage = () => {
  const { addEntry } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    ({ name, firstName }, { resetForm }) => {
      addEntry({ name, firstName })
      resetForm()
    },
    [addEntry]
  )

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting, isValid, handleSubmit }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-4"
        >
          <FormField name="amount" type="number" />
          <FormField name="description" as={Textarea} />
          <Button type="submit" disabled={isSubmitting || !isValid}>
            ADD
          </Button>
        </form>
      )}
    </Formik>
  )
}

AddEntryPage.getLayout = (page) => <Page title="Add new entry">{page}</Page>

export default AddEntryPage
