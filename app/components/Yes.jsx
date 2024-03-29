'use client'

import React, {useState} from "react";
import When from "@/app/components/When";

const Yes = () => {

    const [Date, setDate] = useState(false);
    const [DateType, setDateType] = useState('');
    const yourName = 'Sargun Khurana';
    const senderName = '[Your Name]';

    const phoneNumber = '9518426920';

    const idUrl = 'https://www.instagram.com/sargun.khurana/';


    return (
        <div className={'flex h-screen flex-col items-center justify-between pb-16 pt-14 md:pt-8 px-4 sm:px-12'}>
            <div>
                <h1 className={'font-bold text-white text-5xl font-serif'}>Yeeeyyyy!!</h1>
            </div>
            {
                Date ? <>
                    <When dateType={DateType} phoneNumber={phoneNumber} idUrl={idUrl} yourName={yourName} senderName={senderName} />
                </> : <>
                    <img src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
                         alt="Cute animated illustration"/>

                    <div className={'flex flex-col items-center gap-8'}>
                        <h1 className={'font-bold text-white text-xl font-mono'}>Select Date Type 🤭🫣</h1>
                        <div className={'flex gap-x-4 sm:gap-x-24 md:gap-x-32'}>
                            <button className={'bg-[#FFB6C1] px-5 py-2 rounded-md text-white'} onClick={() => {
                                setDate(true);
                                setDateType('night');
                            }}>Night Date
                            </button>
                            <button className={'bg-[#FFB6C1] px-5 py-2 rounded-md text-white'} onClick={() => {
                                setDate(true);
                                setDateType('day');
                            }}>Day Date
                            </button>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Yes;