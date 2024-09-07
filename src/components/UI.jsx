import React from 'react'
import { atom, useAtom } from 'jotai';

export const currentPageAtom = atom("intro");

const ShopUI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  return (
    <div className={`relative inset-0 pointer-events-none 
    ${currentPage === "guy" ? '' : 'hidden'}`}
    >
    <div dir='ltr'>
    <section  
        className={`relative w-full h-full duration-500`}
      >
        <div className="h-[20%]">
          <button
            onClick={() => setCurrentPage("home")}
            className="pointer-events-auto cursor-copy text-4xl static m-10 bg-white text-orange-400 font-black border-double border-4 border-indigo-600 hover:scale-105">Color
          </button>
        </div>
        <div className="h-[20%]">
          <br />
          <button
            onClick={() => setCurrentPage("home")}
            className="pointer-events-auto cursor-copy text-4xl static m-10 bg-white text-orange-400 font-black border-double border-4 border-indigo-600 hover:scale-105">Decoration
          </button>
        </div>
        <div className="h-[20%]">
          <br />
          <button
            onClick={() => setCurrentPage("home")}
            className="pointer-events-auto cursor-copy text-4xl static m-10 bg-white text-orange-400 font-black border-double border-4 border-indigo-600 hover:scale-105">Animation
          </button>
        </div>
      </section>

    </div>
    <div dir='rtl'>
    <section  className={`absolute w-full h-full top-0`}>
        <div className={`relative w-full h-[80%] duration-500`}>
          <div
            className="pointer-events-auto cursor-copy absolute h-full w-[30%] top-0 start-0 m-10 bg-white border-double border-4 border-indigo-600">
          </div>
        </div>
      </section>

    </div>
    </div>
  );
}

function UI() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
          duration-500
          ${currentPage === "home" ? '' : 'hidden'}`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={() => setCurrentPage("guy")}
          className="pointer-events-auto p px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors duration-500 h-10 hover:scale-105"
        >
          ENTER
        </button>
      </section>
      <ShopUI />
    </div>
  );
}

export default UI;