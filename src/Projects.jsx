import { projectdata } from "./Projectdata";
const Projects = () => {
    return (
        <>
            <div className=" w-[95%] m-auto items-center">
                <h1 className="text-3xl font-bold text-white">My Projects</h1>
                <hr />
                <br />
                <div className="grid grid-cols-3 gap-4 m-auto ">

                    {
                        projectdata.map((data) => {
                            return (
                                <>
                                    <div className="m-auto ">
                                        <img src={data.url} alt="" width={"200px"} className="rounded-3xl" />
                                        <h2 className="text-lg text-white">{data.name}</h2>
                                        <p className="text-sky-200">{data.title}</p>
                                        <p className="text-sky-200">{data.subtitle}</p>
                                        <a href={data.url}><button className="flex text-center mt-2 gap-2"><img src="https://www.svgrepo.com/show/197511/eye-vision.svg" alt="" width={20} />Preview</button></a>
                                    </div>.


                                </>
                            )
                        })
                    }
                </div>


            </div>

        </>
    )
}
export default Projects;