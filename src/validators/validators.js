import * as yup from "yup"

export const nameValidator = yup.string().label("Name")
export const firstNameValidator = yup.string().label("FirstName")
export const adressValidator = yup.string().label("Adress")
export const emailValidator = yup.string().email().label("Email")
export const ageValidator = yup.number().positive().label("age")
