import AppContext from "../../src/components/AppContext"
import Button from "../../src/components/Button"
import FormField from "../../src/components/FormField"
import Textarea from "../../src/components/Textarea"
import {
  nameValidator,
  firstNameValidator,
  adressValidator,
  emailValidator,
  ageValidator,
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
  age: 0,
}
const validationSchema = yup
  .object()
  .shape({
    name: nameValidator.required(),
    firstName: firstNameValidator.required(),
    adress: adressValidator.required(),
    email: emailValidator.required(),
    age: ageValidator.required(),
  })
  .required()

const AddEntryPage = () => {
  const { addEntry } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    ({ name, firstName, adress, email, age }, { resetForm }) => {
      addEntry({ name, firstName, adress, email, age })
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
          className="flex flex-col gap-3 p-3"
        >
          <FormField name="name" type="string" placeholder="Enter a name" />
          <FormField
            name="firstName"
            type="string"
            placeholder="Enter a first name"
          />
          <FormField
            name="adress"
            as={Textarea}
            placeholder="Enter an adress"
          />
          <FormField name="email" type="string" placeholder="Enter an email" />
          <FormField name="age" Ctype="number" placeholder="Enter a age" />
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
