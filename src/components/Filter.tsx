import React,{FC, useState} from 'react'


interface FilterProps{
  title:string
}
const Filter:FC<FilterProps>= ({ title }) => {
    const [isClicked, setIsClicked] = useState(false)
  return (
    <button className="border border-black rounded-full text-black px-4 py-2">
      {title}
    </button>
  )
}

export default Filter