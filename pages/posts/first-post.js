import Link from "next/link"
import Head from "next/head"
import FormField from "../../src/components/FormField"
import Button from "../../src/components/Button"
import { Formik } from "formik"
import { useState } from "react"
import { AppContextProvider } from "../../src/context/State"

export default function FirstPost() {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)

  return (
    <AppContextProvider>
      <div>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="float-root">
          <p className="text-3xl font-bold float-left">Add new entry</p>
          <Link href="/posts/first-post">
            <a className="text-2xl font-bold float-right pl-5">Add entry</a>
          </Link>
          <Link href="/">
            <a className="text-2xl font-bold float-right">Dashboard</a>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <Formik>
          <form className="flex flex-col gap-4 p-4">
            <FormField
              type="number"
              value={amount}
              onchange={(e) => setAmount(e.target.value)}
              placeholder="add your amount"
            >
              Add your amount
            </FormField>
            <FormField
              type="text"
              value={description}
              onchange={(e) => setDescription(e.target.value)}
            >
              Add your description
            </FormField>
            <Button type="submit">SUBMIT</Button>
          </form>
        </Formik>
      </div>
    </AppContextProvider>
  )
}
