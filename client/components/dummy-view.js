import React from 'react'

import Head from './head'
import Header from './header'
import Footer from './footer'

const Dummy = () => {
  return (
    <div>
      <Header />
      <Head title="Hello">
        <title>Head</title>
      </Head>
      <div className="my-64 py-40">
        <div className="flex items-center justify-center   ">
          <img
            className="h-10 w-10  rounded-lg  my-3 "
            src="https://image.flaticon.com/icons/svg/25/25657.svg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center ">
          <div className="font-bold text-2xl">Users repository search</div>
        </div>
        <form className=" flex items-center justify-center">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              View repositories
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
