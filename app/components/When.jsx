'use client'

import {useState} from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useRouter} from "next/navigation";

const When = ({dateType, phoneNumber, idUrl}) => {
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const router = useRouter();

    return (
        <div className={'flex flex-col gap-y-8'}>
            <button className={'bg-gradient-to-r from-purple-500 to-pink-500 gap-x-2 py-2 px-6 rounded-md text-white flex items-center'} onClick={()=>{
                window.location.href = idUrl;

            }}>
                <div><InstagramIcon/></div>
                <div>Instagram</div>
            </button>
            <button className={'bg-[#25d366] gap-x-2 py-2 px-6 rounded-md text-white flex items-center'} onClick={()=>{
                window.location.href = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text&type=phone_number&app_absent=0`;
            }}>
                <div><WhatsAppIcon/></div>
                <div>WhatsApp</div>
            </button>
        </div>
    )
}

export default When;