import * as yup from "yup"

export const nameValidator = yup.string().label("Name")
export const firstNameValidator = yup.string().label("FirstName")
export const adressValidator = yup.string().label("Adress")
export const emailValidator = yup.string().label("Email")
export const numberValidator = yup.number().label("Number")
