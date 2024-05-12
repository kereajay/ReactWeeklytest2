import { Certidata, professional,languageProficiency  } from "./Certidata";

const Certificates = () => {
    return (
        <>
            <div className=" w-[95%] m-auto">
                <h1 className="text-3xl font-bold text-white">My Certificates</h1>
                <hr />
                <br />

                <div className="flex gap-4">
                    <div className="bg-sky-800 p-4 rounded-2xl"><img src="https://www.svgrepo.com/show/331709/computer.svg" alt="" width={30} /></div>
                    <h1 className="text-2xl font-bold text-white">Technical Competence</h1>
                    <br />
                </div>
                <br />
                <div>
                    {
                        Certidata.map((data) => {
                            return(
                                <>
                                <div className="p-4 text-white">
                                    <h2 className="text-lg font-semibold">{data.language}</h2>
                                    <h2 className="mt-2">{data.sub}</h2>
                                    <div className="border-8 border-sky-800 w-[28%] p-6 mt-2" ><img src={data.url} alt="" width={250}  className="mt-2 hover:scale-110 transition-all duration-500"/></div>
                                </div>
                                <br />
                                
                                </>
                            )
                            
                        })
                    }
                </div>
                <br />
                <br />
                <div className="flex gap-4">
                    <div className="bg-sky-800 p-4 rounded-2xl"><img src="https://www.svgrepo.com/show/408430/user-person-profile-check.svg" alt="" width={30} /></div>
                    <h1 className="text-2xl font-bold text-white">Professional Skills</h1>
                    <br />
                </div>
                <br />
                <div>
                    {
                        professional.map((data) => {
                            return(
                                <>
                                <div className="p-4 text-white">
                                    <h2 className="text-lg font-semibold">{data.language}</h2>
                                    <h2 className="mt-2">{data.sub}</h2>
                                    <div className="border-8 border-sky-800 w-[28%] p-6 mt-2" ><img src={data.url} alt="" width={250}  className="mt-2 hover:scale-110 transition-all duration-500"/></div>
                                </div>
                                <br />
                                
                                </>
                            )
                            
                        })
                    }
                </div>
                <br />
                <br />
                <div className="flex gap-4">
                    <div className="bg-sky-800 p-4 rounded-2xl"><img src="https://www.svgrepo.com/show/506518/language.svg" alt="" width={30} /></div>
                    <h1 className="text-2xl font-bold text-white">Language Proficiency</h1>
                    <br />
                </div>
                <br />
                <div>
                    {
                        languageProficiency.map((data) => {
                            return(
                                <>
                                <div className="p-4 text-white">
                                    <h2 className="text-lg font-semibold">{data.language}</h2>
                                    <h2 className="mt-2">{data.sub}</h2>
                                    <div className="border-8 border-sky-800 w-[28%] p-6 mt-2" ><img src={data.url} alt="" width={250}  className="mt-2 hover:scale-110 transition-all duration-500"/></div>
                                </div>
                                <br />
                                
                                </>
                            )
                            
                        })
                    }
                </div>
                <br />
                <br />

            </div>

        </>
    )
}
export default Certificates;