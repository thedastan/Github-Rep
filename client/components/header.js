import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
    props.handleFind(e.target.value)
  }
  return (
    <nav className="flex justify-between   bg-gray-800 p-10">
      <div>
        <NavLink
          to="/"
          className="lex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
        >
          Home
        </NavLink>

        {props.readme && (
          <NavLink
            to={`/${props.userName}`}
            className="border border-teal-500 text-teal-500  rounded-sm font-bold py-2 px-4 ml-20 flex -my-8  hover:bg-teal-500 hover:text-white"
          >
            <svg
              className="h-5 w-5 mr-2 fill-current"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="-49 141 512 512"
            >
              <path
                id="XMLID_10_"
                d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
              >
                d
              </path>
            </svg>
            Repositories
          </NavLink>
        )}
      </div>
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        className=" appearance-none  rounded text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        placeholder="find..."
      />
    </nav>
  )
}

export default React.memo(Header)
