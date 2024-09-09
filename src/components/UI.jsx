import React, { useState } from 'react'
import { atom, useAtom } from 'jotai';

import { useGuyContext } from '../contexts/GuyContext';

export const currentPageAtom = atom("intro");

export const materialAtom = atom("stylized");

const ShopUI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [shopPage, setShopPage] = useState();
  
  const {material, setMaterial, color, setColor, animation, setAnimation} = useGuyContext();

  return (
    <div className={`relative inset-0 pointer-events-none 
    ${currentPage === "guy" ? '' : 'hidden'}`}
    >
      <div dir='ltr'>
        <section
          className={`relative h-full w-[20%] mt-10 p-5 duration-500`}
        >
          <div className="h-[20%] my-5 text-4xl text-orange-400 font-black">Menu</div>
          <div className="h-[10%]">
            <button
              onClick={() => console.log(material)}
              className="pointer-events-auto cursor-copy text-xl my-5 bg-black text-orange-400 font-black border-solid border-4 border-white hover:scale-105">Color
            </button>
          </div>
          <div className="h-[10%]">
            <br />
            <button
              onClick={() => setShopPage("texture")}
              className="pointer-events-auto cursor-copy text-xl my-5 bg-black text-orange-400 font-black border-solid border-4 border-white hover:scale-105">Texture
            </button>
          </div>
          <div className="h-[10%]">
            <br />
            <button
              onClick={() => setCurrentPage("home")}
              className="pointer-events-auto cursor-copy text-xl my-5 bg-black text-orange-400 font-black border-solid border-4 border-white hover:scale-105">Animation
            </button>
          </div>
        </section>

      </div>
      <div dir='rtl'>
        <section className={`absolute w-full h-full top-0`}>
          <div className={`relative w-full h-full duration-500`}>
            <div
              className={`absolute w-[20%] top-10 start-0 mx-5 grid grid-cols-1 gap-10"
              ${shopPage === "texture" ? '' : 'hidden'}`}
            >
              <button
                onClick={() => setMaterial("stylized")}
                className=" pointer-events-auto cursor-copy hover:scale-105">stylized
              </button>
              <button
                onClick={() => setMaterial("portuguese")}
                className="pointer-events-auto cursor-copy hover:scale-105">portuguese
              </button>
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