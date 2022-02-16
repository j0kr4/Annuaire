import AppContext from "../../src/components/AppContext"
import Button from "../../src/components/Button"
import FormField from "../../src/components/FormField"
import Textarea from "../../src/components/Textarea"
import {
  nameValidator,
  firstNameValidator,
  adressValidator,
  emailValidator,
  numberValidator,
} from "../../src/validators/validators"
import { Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"

const { default: Page } = require("../../src/components/Page")

const initialValues = {
  name: "",
  firstName: "",
  adress: "",
  email: "",
  number: 0,
}
const validationSchema = yup
  .object()
  .shape({
    name: nameValidator.required(),
    firstName: firstNameValidator.required(),
    adress: adressValidator.required(),
    email: emailValidator.required(),
    number: numberValidator.required(),
  })
  .required()

const AddEntryPage = () => {
  const { addEntry } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    ({ name, firstName, adress, email, number }, { resetForm }) => {
      addEntry({ name, firstName, adress, email, number })
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
          <FormField name="name" type="string" />
          <FormField name="firstName" type="string" />
          <FormField name="adress" as={Textarea} />
          <FormField name="email" type="string" />
          <FormField name="number" type="number" />
          <Button type="submit" disabled={isSubmitting || !isValid}>
            ADD
          </Button>
        </form>
      )}
    </Formik>
  )
}

AddEntryPage.getLayout = (page) => <Page title="Add contact">{page}</Page>

export default AddEntryPage
