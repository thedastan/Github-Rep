import React from 'react'
import { history } from '../redux'

const RepoList = (props) => {
  const handleView = () => {
    history.push(handleView())
  }
  return (
    <div>
      <table className="w-full my-30">
        <thead className="mb-20 text-xl">
          <tr>
            <th className="bg-teal-800 text-white  rounded-lg ">Repository name</th>
            <th className="bg-indigo-600 text-white p-2  rounded-lg  ">View readme</th>
          </tr>
        </thead>
        <tbody className="p-10">
          {props.repositories.map((rep) => (
            <tr className="" key={rep.id}>
              <td className=" text-lg p-1 text-center rounded font-serif bg-gray-700 border text-white hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition duration-500 ease-in-out  hover:bg-red-500   transform hover:-translate-y-1 hover:scale-106 ">
                {rep.name}
              </td>
              <td>
                <button
                  type="button"
                  className="  my-2 bg-teal-500 ml-10 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-3 px-12 rounded transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
                  onClick={handleView}
                >
                  View readme
                </button>
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
