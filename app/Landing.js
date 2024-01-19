'use client'

import React from "react";
import {useRouter} from "next/navigation";


const Landing = () => {

    const router = useRouter();

    const moveButton = () => {
        let button = document.querySelector('.buttons button:nth-child(2)');
        let randomX = Math.floor(Math.random() * 100);
        let randomY = Math.floor(Math.random() * 100);
        button.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    return(
        <div className={''}>
            <div className={'font-bold flex justify-center text-white text-lg sm:text-2xl md:text-4xl font-serif'}>
                <h1>Do you wanna go out with me?</h1>
            </div>
            <div className={'flex justify-center'}>
                <img
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
                    alt="Cute animated illustration"/>
            </div>
            <div className={'buttons justify-center flex gap-x-16 md:gap-x-32 px-32'}>
                <button className={'bg-[#FFB6C1] px-5 py-2 rounded-md text-white'} onClick={()=>{
                    router.push('/yes');
                }}>Yes</button>
                <button className={'bg-[#FFB6C1] px-5 py-2 rounded-md text-white'} onMouseEnter={moveButton} onClick={moveButton}>No</button>
            </div>
        </div>
    )
}

export default Landing;