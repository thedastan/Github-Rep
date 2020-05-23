import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-10">
      <div>
        <NavLink
          to="/"
          className="lex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
        >
          Home
        </NavLink>
      </div>
    </nav>
  )
}

export default React.memo(Header)
