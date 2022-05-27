import Head from 'next/head'
import Image from 'next/image'
import { FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const Home = ({ launches }) => {
  const router = useRouter()
  console.log('launches', launches)

  useEffect(() => {
    // router.push('/login')
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h3>Index</h3>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  let results = await fetch('https://m-demo-1.hasura.app/v1/graphql', {
    method: 'POST',

    headers: new Headers({
      'x-hasura-admin-secret':
        'xXx2JTXihpVXh8O0KIkaacazZLFiRQ4jQqVhAnaMvyNr131tmuEFRjrTNhXGwH04',
      'Content-Type': 'application/json',
    }),

    body: JSON.stringify({
      query: `{
        users {
          id
          created_at
          last_seen
          name
        }
      }`,
    }),
  })
  let characters = await results.json()
  console.log(characters.data)
  return {
    props: {
      launches: characters,
    },
  }
}
