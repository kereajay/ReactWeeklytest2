import { Moredata } from "./Moredata";
const More = () => {
    return (
        <>
            <div className=" w-[95%] m-auto items-center">

                <h1 className="text-3xl font-bold text-white">Side Projects</h1>
                <hr />
                <br />
                <div className="grid grid-cols-2 gap-6">
                    {
                        Moredata.map((data) => {
                            return (
                                <>
                                    <div>
                                        <img src={data.url} alt="" width={600} className="h-[300px] rounded-2xl" />
                                        <div className="p-4">
                                            <p className="mt-2 text-blue-300 ">{data.para1}</p>
                                            <h2 className="text-2xl font-bold mt-4 text-white">{data.title}</h2>
                                            <p className="mt-4 text-lg text-blue-300">{data.para2}</p>
                                            <br />
                                            <a href="https://pigletz.com/"><button className="border-2 border-black p-2 w-[100%] rounded-xl">🌐 Website</button></a>
                                            <br />
                                            

                                            <a href="https://www.instagram.com/pigletznft/"><button className="border-2 border-black p-2 w-[100%] rounded-xl">📸 Instagram</button></a>
                                            <br />
                                            <a href="https://www.youtube.com/@PigletzNFT"><button className="border-2 border-black p-2 w-[100%] rounded-xl">🎥 Youtube</button></a>
                                        </div>
                                        <br />
                                        <br />
                                    </div>

                                </>
                            )
                        })

                    }

                </div>



            </div>

        </>
    )
}
export default More;