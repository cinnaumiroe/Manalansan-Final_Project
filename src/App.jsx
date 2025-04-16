import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header class="flex justify-between items-center pt-11 pl-[8%] pr-[8%] mb-15">
        <a href="#" class="text-3xl font-semibold tracking-wide cursor-pointer no-underline text-white">Jynyl.</a>

        <nav class="flex text-white">
            <a href="#" class="text-lg font-medium ml-9 border-b-2 border-transparent hover:text-white hover:drop-shadow-[2px_2px_4px_rgba(255,255,255,1)] transition duration-500 ease-in-out">Home</a>
            <a href="#" class="text-lg font-medium ml-9 border-b-2 border-transparent hover:text-white hover:drop-shadow-[2px_2px_4px_rgba(255,255,255,1)] transition duration-500 ease-in-out">About</a>
            <a href="#" class="text-lg font-medium ml-9 border-b-2 border-transparent hover:text-white hover:drop-shadow-[2px_2px_4px_rgba(255,255,255,1)] transition duration-500 ease-in-out">Gallery</a>
            <a href="#" class="text-lg font-medium ml-9 border-b-2 border-transparent hover:text-white hover:drop-shadow-[2px_2px_4px_rgba(255,255,255,1)] transition duration-500 ease-in-out">Contact</a>
        </nav>
    </header>

    <div class="max-w-2xl mx-auto text-center p-10 text-white flex flex-col gap-2">
        <section>
            <div class="flex flex-col gap-2 items-center">
                <h1 class="text-5xl leading-none">Jynyl Manalansan</h1>
                <div class="inline-flex gap-3 items-center">
                    <div class="text-2xl flex-shrink-0">I'm a</div>
                    <ul class="overflow-hidden h-10 rounded-lg bg-[#801B4D] list-none text-white text-2xl font-medium relative animate-slide">
                        <li class="h-10 relative top-0"><span class="relative px-5 py-1 whitespace-nowrap">BSIT STUDENT</span></li>
                        <li class="h-10 relative top-0"><span class="relative px-5 py-1 whitespace-nowrap">WEB DEVELOPER</span></li>
                        <li class="h-10 relative top-0"><span class="relative px-5 py-1 whitespace-nowrap">UI/UX DESIGNER</span></li>
                        <li class="h-10 relative top-0"><span class="relative px-5 py-1 whitespace-nowrap">FREELANCER</span></li>
                    </ul>
                </div>
                <p class="text-sm tracking-widest my-5">Welcome to my digital canvas ! Dive into a world where creativity and innovation intersect.
                    Explore my projects and see how ideas come to life. Let's embark on an extraordinary journey
                    together!
                </p>
                <div class="inline-flex items-center space-x-2 text-2xl">
                    <a href="#" class="inline-flex items-center p-2 border-2 border-white rounded-full text-white text-xl no-underline transition duration-500 hover:bg-white hover:shadow-[0_0_10px_rgba(255,255,255,1)] hover:text-[#32414E]"><i class="ri-github-fill"></i></a>
                    <a href="#" class="inline-flex items-center p-2 border-2 border-white rounded-full text-white text-xl no-underline transition duration-500 hover:bg-white hover:shadow-[0_0_10px_rgba(255,255,255,1)] hover:text-[#32414E]"><i class="ri-facebook-circle-fill"></i></a>
                    <a href="#" class="inline-flex items-center p-2 border-2 border-white rounded-full text-white text-xl no-underline transition duration-500 hover:bg-white hover:shadow-[0_0_10px_rgba(255,255,255,1)] hover:text-[#32414E]"><i class="ri-instagram-fill"></i></a>
                    <a href="#" class="inline-flex items-center p-2 border-2 border-white rounded-full text-white text-xl no-underline transition duration-500 hover:bg-white hover:shadow-[0_0_10px_rgba(255,255,255,1)] hover:text-[#32414E]"><i class="ri-whatsapp-fill"></i></a>
                </div>
            </div>
        </section>
    </div>
    </>
  ) 
}

export default App
