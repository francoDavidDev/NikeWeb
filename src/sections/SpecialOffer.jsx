import React from "react"
import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
     <div className="flex-1  ">
        <img src={offer} width={773} height={687} 
        className="object-contain w-full"/>
     </div>
     <div className="flex flex-1 flex-col">
     
        <h2 className="mt-10 font-palanquin capitalize  text-4xl font-bold lg:max-w-lg " > 
         
        
        <span className="text-coral-red "> Special </span>
       
        
        Offer Shoes
         </h2>
         <p className="mt-4 lg:mx-w-lg info-text">Embark on a shopping journery that redefines your experience with unbeatable dels. Form premier selections to increible saving, we aoofer uparlleled value that sets us apart</p>


         <p className="mt-6 lg:max-lg info-text"> Navigate a realm of possibilities designed yo fulfull your unique desires, surpassing ghe lofties expectations, Your journery with us is nothing short of expeptional</p>


         <div className="mt-11 flex flex-wrap gap-4">
         <Button label='View Details' />

         <Button label='Learn More'
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray'/>
         </div>
         
      </div>
    </section>
  )
}

export default SpecialOffer
