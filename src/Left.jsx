import { Github, Linkedin, Twitter, Instagram } from 'react-bootstrap-icons';
const Left = () => {
    return (
        <>
            <div className="w-[20 %] bg-sky-700  p-8 items-center rounded-3xl fixed">
                <img src="https://oktayshakirov.com/assets/images/avatar.jpg" alt="" width={150} className="rounded-lg" />
                <br />
                <h2 className="text-xl font-bold text-white">Oktay Shakirov</h2>
                <br />
                {/* <p className=""></p> */}
                <small className="text-white border-2 rounded-2xl p-2 border-none border-white bg-sky-800">Frontend Developer</small>
                <br />
                <br />
                <hr />
                <br />
                <div className="flex flex-row gap-2">
                    <div className="bg-sky-800 p-2 rounded-2xl">
                        <img src="https://www.svgrepo.com/show/465470/loading.svg" alt="" width={30} />
                    </div>
                    <div className="text-white">
                        <small className="text-slate-300">AGE</small>
                        <p>29 years old</p>
                    </div>
                </div>
                <br />
                <div className="flex flex-row gap-2">
                    <div className="bg-sky-800 p-2 rounded-2xl">
                        <img src="https://www.svgrepo.com/show/408418/location-pin-map.svg" alt="" width={30} />
                    </div>
                    <div className="text-white">
                        <small className="text-slate-300">LOCATION</small>
                        <p>

                            Berlin, Germany</p>
                    </div>
                </div>
                <br />
                <div className="flex flex-row gap-2">
                    <div className="bg-sky-800 p-2 rounded-2xl">
                        <img src="https://www.svgrepo.com/show/408430/user-person-profile-check.svg" alt="" width={30} />
                    </div>
                    <div className="text-white">
                        <small className="text-slate-300">PERSONALITY TYPE</small>
                        <p>

                            INTJ-T</p>
                    </div>
                </div>
                <br />
                <div className='flex flex-row justify-between text-sky-300 text-lg'>
                    <Github />
                    <Linkedin />
                    <Instagram />
                    <Twitter />
                </div>
            </div>

        </>
    )
}
export default Left;