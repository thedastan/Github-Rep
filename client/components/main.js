import React, { useState } from 'react'
import { history } from '../redux'
import './main.scss'

const Main = () => {
  const [userLogin, setUserLogin] = useState('')
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      history.push(`/${userLogin}`)
    }
  }
  return (
    <div className="h-screen main  flex">
      <div className="m-auto bg-teal-200 p-10 rounded opacity-100">
        <div className="flex items-center justify-center   ">
          <img
            className="h-10 w-10  rounded-lg  my-2 "
            src="https://image.flaticon.com/icons/svg/25/25657.svg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center ">
          <div className="font-bold text-2xl text-red">Search for github users</div>
        </div>
        <form className=" flex items-center justify-center py-10">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="login..."
              onChange={(e) => setUserLogin(e.target.value)}
              onKeyDown={handleSearch}
              value={userLogin}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
              type="button"
              onClick={() => history.push(`/${userLogin}`)}
            >
              Search user
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
