import React from 'react'

const Footer = () => {
  return (
    <nav className="flex items-center justify-center   flex-wrap bg-gray-800 p-10 ">
      <h2 className="flex justify-center items-center text-lg text-white">
        Copyright © 2020 all rights reserved.
      </h2>
    </nav>
  )
}

export default React.memo(Footer)
