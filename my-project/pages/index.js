import Head from 'next/head'
import Image from 'next/image'
import { FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex w-2/3 max-w-4xl rounded-2xl bg-white shadow-2xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-blue-500">
              Kasper Global
            </div>
            <div className="py-10">
              <h2 className="mb-2 text-3xl font-bold text-blue-500 ">
                Sign In To Account
              </h2>
              <div className="mb-2 inline-block w-10 border-2 border-blue-500"></div>
            </div>
            <div className="mb-3 flex flex-col items-center">
              <div className="flex w-64 items-center rounded-xl bg-gray-100 p-1">
                <FaRegEnvelope className="m-2 text-gray-400" />{' '}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 bg-gray-100 text-sm outline-none"
                />
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center">
              <div className="flex w-64 items-center rounded-xl bg-gray-100 p-1">
                <MdLockOutline className="m-2 text-gray-400" />{' '}
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="flex-1 bg-gray-100 text-sm outline-none"
                />
              </div>
            </div>
            <button
              type="button"
              className="inline-block rounded-full border-2 border-blue-500 py-2 px-12 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Sign Up
            </button>
          </div>
          <div className="w-2/5 rounded-tr-2xl rounded-br-2xl bg-blue-500 py-10 px-12 text-white">
            <h2 className="mb-2 text-3xl font-bold ">Sign Up Here</h2>
            <div className="mb-2 inline-block w-10 border-2 border-white"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <div className="mb-3 flex flex-col items-center">
              <div className="flex w-64 items-center rounded-xl bg-gray-100 p-1">
                <FaRegEnvelope className="m-2 text-gray-400" />{' '}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 bg-gray-100 text-sm outline-none"
                />
              </div>
            </div>
            <div className="mb-3 flex flex-col items-center">
              <div className="flex w-64 items-center rounded-xl bg-gray-100 p-1">
                <MdLockOutline className="m-2 text-gray-400" />{' '}
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="flex-1 bg-gray-100 text-sm outline-none"
                />
              </div>
            </div>
            <div className="mb-10 flex flex-col items-center">
              <div className="flex w-64 items-center rounded-xl bg-gray-100 p-1">
                <MdLockOutline className="m-2 text-gray-400" />{' '}
                <input
                  type="password"
                  name="password"
                  placeholder="confirm password"
                  className="flex-1 bg-gray-100 text-sm outline-none"
                />
              </div>
            </div>
            <button
              type="button"
              className="inline-block rounded-full border-2 border-white py-2 px-12 font-semibold hover:bg-white hover:text-blue-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
