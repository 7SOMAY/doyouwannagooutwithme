'use client'

import {useState} from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useRouter} from "next/navigation";

const When = ({dateType, phoneNumber, idUrl, yourName, senderName}) => {
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const router = useRouter();

    return (
        <div className={'flex flex-col gap-y-8'}>
            {/*<button className={'bg-gradient-to-r from-purple-500 to-pink-500 gap-x-2 py-2 px-6 rounded-md text-white flex items-center'} onClick={()=>{*/}
            {/*    window.location.href = idUrl;*/}

            {/*}}>*/}
            {/*    <div><InstagramIcon/></div>*/}
            {/*    <div>Instagram</div>*/}
            {/*</button>*/}
            <button className={'bg-[#25d366] gap-x-2 py-2 px-6 hover:bg-auto rounded-md text-white flex items-center'} onClick={()=>{
                window.location.href = `https://api.whatsapp.com/send/?phone=91${phoneNumber}&text=Heyy ${yourName},\n Hope you're doing well!\n Let's catch up soon.\n Are you free this week for a quick coffee or lunch?\n Let me know your availability. Excited to see you!\n\n Cheers!!!\n ${senderName}.&type=phone_number&app_absent=0`;
            }}>
                <div><WhatsAppIcon/></div>
                <div>WhatsApp</div>
            </button>
        </div>
    )
}

export default When;