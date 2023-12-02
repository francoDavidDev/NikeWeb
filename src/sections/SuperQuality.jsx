import React from "react"
import Button from "../components/Button"
import { shoe8 } from "../assets/images"



const SuperQuality = () => {
  return (
    <section  id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" >
      <div className="flex flex-1 flex-col">
     
        <h2 className="mt-10 font-palanquin capitalize  text-4xl font-bold lg:max-w-lg " > 
          We Provide you
        
        <span className="text-coral-red "> Super</span>
        <span className="text-coral-red "> Quality </span>
        
        Shoe
         </h2>
         <p className="mt-4 lg:mx-w-lg info-text">Ensuring premiu comfort and style, our meticulously craafted footwr is designed to elevte yopur expericnece, providing you with unmatchewd quality, innovation, and  touch of elegnce.</p>
         <p className="mt-6 lg:max-lg info-text"> Our dedication to detial nd excellence ensures your stisfation</p>
         <div className="mt-11 flex flex-wrap gap-4">
         <Button label='Shop Now'  />
         <Button label='Learn More'
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray'
         />
         </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
        src={shoe8}
         alt="shoe8"
         width={570}
         height={522} 
         className="object-contain"
         />
      </div>
    </section>
  )
}

export default SuperQuality
