import { useState } from "react"
const Contact = () => {
const [copied,setCopied]=useState(false)
const handlecopy=()=>{
    navigator.clipboard.writeText("abcdxyz123@gmail.com")
    setCopied(true)
    setTimeout(()=>setCopied(false),1000)
}

    return (
        <>
            <div className=" w-[95%] m-auto">
                <h1 className="text-3xl font-bold text-white">About Me</h1>
                <hr />
                <br />

                <div className="w-[100%] bg-sky-800 text-center  rounded-2xl  ">
                    <h1 className="text-3xl text-white p-10 font-bold">Emial:</h1>
               <div className="flex flex-row gap-2 m-auto text-center justify-center">
                    <p className="text-xl text-white mail">abcdxyz123@gmail.com</p>
                    <button className="p-1 rounded-2xl text-lg bg-sky-600" onClick={handlecopy}>{copied?<p>Copied</p>:<p>Copy</p>}</button>

               </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            <br />
            <br />
            <div className="w-[95%] m-auto bg-sky-800 rounded-2xl text-center">
                <h1 className="text-3xl font-bold text-white p-10 text-cnter">Schedule Video Call With Me:</h1>
                <div className="m-auto text-center item-cneter w-[10%]">
                    <br />
                <img src="https://oktayshakirov.com/assets/images/calendar.png" alt="" className="item-center" />
                <br />
                <br />
                </div>
                
            </div>
            <br />
                <br />
            <div className="w-[95%] m-auto bg-sky-800 rounded-2xl text-center">
                <h1 className="text-3xl font-bold text-white p-10 text-cnter">Socials</h1>
                <br />
                <div className="flex flex-row gap-8 m-auto text-center items-center justify-center">
                    <img src="https://oktayshakirov.com/assets/images/socials/github.png" alt=""  width={80} className="hover:shadow-[0_20px_50px_rgba(255,_191,_116,_1.0)]"/>
                    <img src="https://oktayshakirov.com/assets/images/socials/linkedin.png" alt=""  width={80} className="hover:shadow-[0_20px_50px_rgba(255,_191,_116,_1.0)]"/>
                    <img src="https://oktayshakirov.com/assets/images/socials/instagram.png" alt=""  width={80} className="hover:shadow-[0_20px_50px_rgba(255,_191,_116,_1.0)]"/>
                    <img src="https://oktayshakirov.com/assets/images/socials/twitter.png" alt=""  width={80} className="hover:shadow-[0_20px_50px_rgba(255,_191,_116,_1.0)]"/>
                </div>
                <br />
                <br />
            </div>
            <br />
            <br />
            <div className="w-[95%] m-auto bg-sky-800 rounded-2xl text-center">
                <h1 className="text-3xl font-bold text-white p-10 text-cnter">Support My Work:</h1>
               
                <p className="text-xl text-white w-[90%]  m-auto">With every small donation, you contribute to hostings, domains and other essential costs. All my work which is made public on GitHub or Figma is open source and free for everyone to use.</p>
                <br />
                <br />
                <button className="p-1 rounded-2xl"><img src="https://oktayshakirov.com/assets/images/coffee-sponsort.png" alt=""  width={250} className="rounded-2xl"/></button>
                <br />
                <br />
                <button className="p-1 rounded-2xl"><img src="https://oktayshakirov.com/assets/images/paypalme.png" alt=""  width={250} className="rounded-2xl"/></button>
                <br />
                <br />
                <button className="p-1 rounded-2xl"><img src="https://oktayshakirov.com/assets/images/github-sponsors.png" alt=""  width={250} className="rounded-2xl"/></button>
                <br />
                <br />
               
                
            </div>
            <br />
            <br />
            <br />




        </>
    )
}
export default Contact;