import React from "react"
import { CardProps } from "../data/CardData"

const Card: React.FC<CardProps> = ({
  title,
  id,
  logo,
  date,
  payment,
  status,
}) => {
  return (
    <div
      key={id}
      className="p-2 pl-2 md:pl-4 flex flex-col md:flex-row justify-between gap-8 pr-2 rounded w-full max-w-screen shadow-lg"
    >
      <div className="flex gap-2 justify-center items-center md:justify-start">
        <img
          src={logo}
          alt="Logo"
          className="bg-gray-500 p-2 h-12 w-12 rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex gap-2">
            <p className="text-gray-500 font-bold">{date}</p>
            <p className="text-gray-500 font-bold">{status}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <p
          className="text-black font-bold text-lg"
          style={{ wordSpacing: "0.25rem" }}
        >
          {payment}
        </p>
      </div>
    </div>
  )
}

export default Card
