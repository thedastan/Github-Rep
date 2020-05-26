import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RepoList = (props) => {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const filteredRepo = props.repositories.filter((el) => el.name.includes(search))
  return (
    <div>
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        className="bg-gray-300 "
        placeholder="search..."
      />
      <table className="w-full my-30">
        <thead className="mb-20 text-xl">
          <tr>
            <th className="bg-teal-800 text-white  ">Repository name</th>
            <th className="bg-indigo-600 text-white p-2 ">View readme</th>
          </tr>
        </thead>
        <tbody className="p-10">
          {filteredRepo.map((rep) => (
            <tr key={rep.id}>
              <td className=" text-lg p-3 text-center  font-serif bg-gray-700  text-white hover:bg-teal-700 border-teal-800 hover:border-teal-700 text-sm border-4 text-white py-1 px-2  transition duration-500 ease-in-out  hover:bg-red-500   transform hover:-translate-y-1 hover:scale-106 ">
                {rep.name}
              </td>
              <td className="bg-teal-800 text-white border text-center hover:bg-teal-700 border-teal-800 hover:border-teal-700 text-sm border-4 text-white py-1 px-2  transition duration-500 ease-in-out  hover:bg-red-500   transform hover:-translate-y-1 hover:scale-106 ">
                <Link to={`/${props.userName}/${rep.name}`}>View readme</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

RepoList.propTypes = {}

export default RepoList
