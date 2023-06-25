import React, { useState } from "react"
import { FiDownload } from "react-icons/fi"
import { CiSearch } from "react-icons/ci"
import { IconContext } from "react-icons"
import Filter from "./Filter"
import Card from "./Card.tsx"
import {CardData} from "../data/CardData.ts"
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
      <div className="my-4 flex-column gap-4 justify-start">
        <div className="text-lg font-bold mb-4">
          <h4 className={`text-lg ${window.innerWidth < 768 ? "ml-4" : ""}`}>
            Filter by
          </h4>
        </div>

        <div className="flex gap-4">
          <Filter title="Last 90 Days" />
          <Filter title="Type" />
          <Filter title="Status" />
        </div>
      </div>

      <h4 className="text-lg my-4 font-bold">Completed</h4>
      <p className="text-md text-gray-500 my-4">This week</p>
      <div className="flex-column">
        {CardData?.map((e) => (
          <div key={e.id} className="mb-4">
            <Card {...e} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Input
