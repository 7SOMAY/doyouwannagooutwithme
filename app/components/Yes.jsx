'use client'

import React, {useState} from "react";
import When from "@/app/components/When";

const yes = () => {

    const [Date, setDate] = useState(false);
    const [DateType, setDateType] = useState('');

    const phoneNumber = '9518426920';
    const idUrl = 'https://www.instagram.com/sargun.khurana/';


    return (
        <div className={'flex h-screen flex-col items-center justify-between py-32'}>
            <div>
                <h1 className={'font-bold text-white text-5xl font-serif'}>Yeeeyyyy!!</h1>
            </div>
            {
                Date ? <>
                    <When dateType={DateType} phoneNumber={phoneNumber} idUrl={idUrl}/>
                </> : <>
                    <img src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
                         alt="Cute animated illustration"/>

                    <div className={'flex flex-col items-center gap-8'}>
                        <h1 className={'font-bold text-white text-xl font-mono'}>Select Date Type 🤭🫣</h1>
                        <div className={'flex gap-x-32'}>
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

export default yes;