
// import * as Dialog from "@radix-ui/react-dialog"

import Image from "next/image"

import { ButtonPhoneCall } from "./ButtonPhoneCall"



export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className=" bg-gray-100 py-2 hidden sm:block">
        <div className = "container mx-auto">
          <div className = "flex items-center justify-between">
          <h3 className = "italic font-base">Chào mừng bạn đến với website của chúng tôi</h3>
          <ButtonPhoneCall />
          </div>
        </div>
   
      </div>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              width={100}
              height={50}
              alt="Logo"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
              // Prevent any layout shift during loading
              priority={true}
            />
          </div>
               


          <div className = "flex flex-row gap-6 ml-[50px]  ">
            <Image src = "/images/brands/1.jpg"height = {130} width={130}  quality={100} alt = "honda" priority></Image>
            <Image src = "/images/brands/2.jpg" height = {130} width={130}  alt = "panapro" priority></Image>
            <Image src = "/images/brands/3.jpg"height = {130} width={130}  alt = "mikasa" priority></Image>
            <Image src = "/images/brands/4.jpg"  height = {130} width={130} alt = "seoul" quality={100}  priority></Image>
          </div>


        </div>
      </div>
    </nav>
  )
}

