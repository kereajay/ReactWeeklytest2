import Carousel from "react-multi-carousel";
import { footerdata } from "./Aboutfooterdata";
const About = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <>
            <div className=" w-[95%] m-auto">
                <h1 className="text-3xl font-bold text-white">About Me</h1>
                <hr />
                <br />
                <div className="bg-sky-800 p-8 text-sky-200 rounded-2xl text-lg">
                    <p>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.
                        <br />
                        <br />

                        Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.
                        <br />
                        <br />
                        In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.
                        <br />
                        <br />

                        If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.</p>
                    <br />
                    <br />

                    <div className="m-auto text-center">
                        {/* <button className="m-auto items-center ">ShowLess</button> */}
                    </div>
                </div>
                <br />
                <br />
                <div className="w-[95%] m-auto">
                    <h1 className="text-3xl font-semibold text-white text-center">Primary Focus</h1>
                    <br />

                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
                        <div className="flex flex-row  bg-sky-800 rounded-3xl p-4 ">
                            <div className="mt-[5%]">

                                <img src="https://oktayshakirov.com/assets/images/icon-dev.svg" alt="" width={100} />
                            </div>
                            <div className="text-white p-2">
                                <h2 className="text-2xl font-bold">Web Design & Development</h2>
                                <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                            </div>
                        </div>
                        <div className="flex flex-row  bg-sky-800 rounded-3xl p-4 ">
                            <div className="mt-[5%]">

                                <img src="https://oktayshakirov.com/assets/images/icon-frameworks.svg" alt="" width={100} />
                            </div>
                            <div className="text-white p-4">
                                <h2 className="text-2xl font-bold">Full-Stack Solutions</h2>
                                <p>Developing scalable web applications using JavaScript Frameworks, SQL Databases, PHP and Python.</p>
                            </div>
                        </div>


                    </div>
                    <br />
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
                        <div className="flex flex-row  bg-sky-800 rounded-3xl p-4 ">
                            <div className="mt-[5%]">

                                <img src="https://oktayshakirov.com/assets/images/icon-app.svg" alt="" width={100} />
                            </div>
                            <div className="text-white p-2">
                                <h2 className="text-2xl font-bold">Mobile Apps & Games</h2>
                                <p>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
                            </div>
                        </div>
                        <div className="flex flex-row  bg-sky-800 rounded-3xl p-4 ">
                            <div className="mt-[5%]">

                                <img src="https://oktayshakirov.com/assets/images/icon-marketing.svg" alt="" width={100} />
                            </div>
                            <div className="text-white p-4">
                                <h2 className="text-2xl font-bold">Marketing & SEO</h2>
                                <p>Using SEO and marketing strategies to boost online visibility and promote products or services.</p>
                            </div>
                        </div>


                    </div>
                    <br />
                    <h1 className="text-3xl font-semibold text-white text-center">Exploring Creativity</h1>
                    <br />
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
                        <div className="flex flex-row  bg-sky-800 rounded-3xl p-4 ">
                            <div className="mt-[5%]">

                                <img src="https://oktayshakirov.com/assets/images/icon-video.svg" alt="" width={100} />
                            </div>
                            <div className="text-white p-2">
                                <h2 className="text-2xl font-bold">Visual Storytelling</h2>
                                <p>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
                            </div>
                        </div>
                        <div className="flex flex-row  bg-sky-800 rounded-3xl p-4 ">
                            <div className="mt-[5%]">

                                <img src="https://oktayshakirov.com/assets/images/icon-multimedia.svg" alt="" width={100} />
                            </div>
                            <div className="text-white p-4">
                                <h2 className="text-2xl font-bold">Digital Content Creation</h2>
                                <p>Creating digital elements, such as 3D models, graphics, animations, videos and AI-generated content.</p>
                            </div>
                        </div>


                    </div>


                </div>
                <br />

                <div>
                    <br />

                    <h1 className="text-3xl font-semibold text-white text-center"> Languages</h1>
                    <br />

                    {/* <div className="w-[50%] bg-black h-4 rounded-3xl">
                        <div className="w-[90%] bg-blue-500 h-4 rounded-3xl"></div>

                    </div> */}
                    <br />
                    <div className="flex gap-6 w-[95%] bg-sky-800 p-10 rounded-2xl
                       m-auto">
                        <div className="w-[50%]  rounded-3xl   ">
                            <h1 className="text-2xl font-semibold text-white text-center">Code Languages</h1>
                            <br />

                            <h1 className="text-xl text-white">JavaScript 90%</h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[90%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />
                            <h1 className="text-xl text-white">TypeScript 75%</h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[75%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />
                            <h1 className="text-xl text-white">CSS 100%</h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[100%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />
                            <h1 className="text-xl text-white">PHP 50%</h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[50%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />
                            <h1 className="text-xl text-white">JavaScript 25%</h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[25%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />


                        </div>
                        <br />
                        <div className="w-[50%]  rounded-3xl   ">
                            <h1 className="text-2xl font-semibold text-white text-center">Human Languages</h1>
                            <br />

                            <h1 className="text-xl text-white">Englisg <small>Fluent</small></h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[100%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />
                            <h1 className="text-xl text-white">Germal <small>Fluent</small></h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[100%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />
                            <h1 className="text-xl text-white">Bulgarian <small>Fluent</small></h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[100%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />
                            <h1 className="text-xl text-white">Turkish <small>Bilingual</small></h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[75%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />
                            <h1 className="text-xl text-white">Russian  <small>Basic</small></h1>
                            <div className="w-[100%] bg-black h-2 rounded-3xl mt-2">
                                <div className="w-[22%] bg-orange-500 h-2 rounded-3xl"></div>

                            </div>
                            <br />


                        </div>


                    </div>
                    <br />

                </div>
                <br />
                <marquee >
                    <div className="flex flex-row  m-auto gap-4 w-[100%] ">
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/html.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/css.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/java-script.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/react.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/next.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/node.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/typescript.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/npm.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/php.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/mysql.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/python.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/linux.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/wordpress.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/git.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/adobe.png" alt="" /></div>
                        <div className="w-[100%]"><img src="https://oktayshakirov.com/assets/images/figma.png" alt="" /></div>


                    </div>
                </marquee>
                <br />
                <br />
                <div>
                    <h1 className="text-3xl font-semibold text-white text-center"> Favorite Activities</h1>
                    <br />
                    <div className="grid lg:grid-cols-2  gap-4 mb-10">
                        {
                            footerdata.map((data, index) => {
                                return (
                                    <div className="flex flex-row bg-sky-800 p-4 gap-4 rounded-xl">

                                        <img src={data.url} alt=""  width={"100px"}/>


                                        <div className="  text-white">
                                            <p className="text-xl font-bold">{data.name}
                                            </p>
                                            <br />
                                            <p className="text-white">{data.para}</p>
                                        </div>
                                    </div>

                                )

                            })
                        }

                    </div>


                </div>




            </div>




        </>
    )
}
export default About;