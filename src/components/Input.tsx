import React, { useState } from "react"
import { FiDownload } from "react-icons/fi"
import { CiSearch } from "react-icons/ci"
import { IconContext } from "react-icons"
import Filter from "./Filter"

const Input = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Perform search action using the searchQuery value
    console.log("Search query:", searchQuery)
  }

  return (
    <div className="container mx-auto my-6 max-w-2xl">
      <form
        className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        onSubmit={handleSearchSubmit}
      >
        <div className="relative flex-1">
          <input
            className="p-4 pl-12 pr-8 rounded-full w-full max-w-screen outline-none border border-black focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <IconContext.Provider value={{ className: "w-5 h-5" }}>
              <CiSearch />
            </IconContext.Provider>
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-200 text-black font-bold p-4 rounded-full"
        >
          <IconContext.Provider value={{ className: "w-5 h-5" }}>
            <FiDownload />
          </IconContext.Provider>
        </button>
      </form>
      <h4 className="text-2xl my-4 font-bold">Filter By</h4>
      <div className="flex gap-4">
        <Filter title="Last 90 Days"/>
        <Filter title="Last 90 Days"/>
        <Filter title="Last 90 Days"/>
      </div>
    </div>
  )
}

export default Input
