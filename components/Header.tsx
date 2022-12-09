/** @jsxImportSource @emotion/react */
"use client"
import Image from 'next/image';
import { jsx, css, keyframes } from '@emotion/react'
import { StyleType } from '../types/style'
import CoverImage from "../public/images/coverImage.png"






function Header() {


  const typing = keyframes`
  from{width: 0;} 
`;


  const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

  const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  const textAnimation = css`
    width: 26ch;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: cursive;
    color: white;
    font-weight: bold;
    animation: ${typing} 4s steps(42), ${blink} 1s step-end infinite;
    position: absolute;
    z-index: 20;
    top: 70px;
    left: auto;
    right: auto;
    bottom: auto;
    
   
  `



  return (
    <div className='mb-10'>
      <div className="z-20 flex place-content-center align-middle md:text-2xl text-sm ">
        <h1
          css={textAnimation}
        >
          Stand on the shoulders of giants.
        </h1>
      </div>
      <div className='relative w-screen sm:h-72 h-48 z-10'>
        <Image
          alt="Sky"
          src={CoverImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'fill',
          }}
        />
      </div>
    </div>
  );
}

export default Header;
