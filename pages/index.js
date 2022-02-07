import Head from "next/head"
import Link from "next/link"
import EntriesList from "../src/components/EntriesList"
import InOut from "../src/components/InOut"
import { Total } from "../src/components/Total"

export default function Home() {
  return (
      <div>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="float-root">
          <p className="text-3xl font-bold float-left">Dashboard</p>
          <Link href="/posts/first-post">
            <a className="text-2xl font-bold float-right pl-5">Add entry</a>
          </Link>
          <Link href="/">
            <a className="text-2xl font-bold float-right">Dashboard</a>
          </Link>
        </div>
        <InOut />
        <EntriesList />
        <Total />
      </div>
  )
}
