import React from "react"
import Button from "../components/Button"

const Subcribe = () => {
  return (
    <section className="max-container bg-red flex justify-between items-center max-lg:flex-col gap-10" id='contact-us'>
      <h3 className="text-4xl leanding-[68px] lg:max-w-md font-palanquin font-bold ">
        Sing Up from <span className="text-coral-red"> Update </span>
        & Newsletters
      </h3>
      <div className="lg:max-w-[30%] min-w-[60%] flex  bg-red-500 items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="suscribe@nike.com"
        className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label='Sing Up' fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subcribe
