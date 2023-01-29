/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { TbMoonStars } from "react-icons/tb";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import daniel from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Zamyatin Daniel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gradient-to-r from-gray-800 to-black px-10 md:px-20 lg:px-40 dark:bg-white">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="text-xl font-burtons text-yellow-100 ">developedbeyd</h1>
            <ul className="flex items-center ">
              <li>
                <TbMoonStars onClick={() => setDarkMode(!darkMode)} className=" text-white cursor-pointer text-2xl " />
              </li>
              <li>
                <button className="">
                  <a className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   text-white px-4 py-2 rounded-md ml-8 " href="#">
                    Resume
                  </a>
                </button>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10  ">
            <h2 className=" text-5xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 font-bold md:text-6xl">Zamyatin Daniel</h2>
            <h3 className="text-2xl py-2 md:text-3xl text-yellow-100">Developer and desinger.</h3>
            <p className="  text-med py-5 leading-8 text-yellow-50 md:text-xl max-w-xl mx-auto shadow-xl shadow-cyan-500/50 p-10 rounded-xl my-10">
              Freelancer providing sevices for progaramming and desing content needs.Join me down below and let`s get crancking!
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="outline outline-offset-2 outline-cyan-500 relative  mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image fill style={{ objectFit: "cover" }} src={daniel} />
          </div>
        </section>
        {/* Nest Sections */}
        <section>
          <div>
            <h3 className="text-3xl py-2   md:text-4xl max-w-xl mx-auto text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">Servesis is offer</h3>
            <div className="text-med py-5 leading-8 text-yellow-50 md:text-xl max-w-xl mx-auto shadow-2xl shadow-cyan-500/50 p-10 rounded-xl my-10 ">
              <p className="text-md py-2 leading-8 text-yellow-50 md:text-xl max-w-xl mx-auto ">
                Since the beginning of my journey as a freelance developer,I`ve done remote work for
                <span className="text-teal-500"> agencies</span> consuldet for <span className="text-teal-500">startups</span> and cpllaborated white talanted people to create digital products for
                both busness and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-yellow-200 md:text-xl max-w-xl mx-auto">I offer from a wide range of services,including</p>
            </div>
          </div>
          {/*Cards*/}
          <div className="lg:flex gap-10">
            <div className=" text-center shadow-2xl shadow-cyan-500/50 p-10 rounded-xl my-20 ">
              <Image className="animate-bounce" src={design} width={100} height={100} style={{ margin: "auto" }} />
              <h3 className="text-lg font-medium pt-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">Beatufiful Desing</h3>
              <p className="py-2 text-yellow-50">Creating elegant designs suited for you needs design theory</p>
              <h4 className="py-4 text-teal-600">Desgin tools I use</h4>
              <p className="text-yellow-200 py-1">Photoshop</p>
              <p className="text-yellow-200 py-1">Illustrator</p>
              <p className="text-yellow-200 py-1">Figma</p>
            </div>
            <div className=" text-center shadow-2xl shadow-cyan-500/50 p-10 rounded-xl my-20 ">
              <Image className="animate-bounce" src={consulting} width={100} height={100} style={{ margin: "auto" }} />
              <h3 className="text-lg font-medium pt-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">Beatufiful Desing</h3>
              <p className="py-2 text-yellow-50">Creating elegant designs suited for you needs design theory</p>
              <h4 className="py-4 text-teal-600">Desgin tools I use</h4>
              <p className="text-yellow-200 py-1">Photoshop</p>
              <p className="text-yellow-200 py-1">Illustrator</p>
              <p className="text-yellow-200 py-1">Figma</p>
            </div>
            <div className="  text-center shadow-2xl shadow-cyan-500/50 p-10 rounded-xl my-20 ">
              <Image className="animate-bounce" src={code} width={100} height={100} style={{ margin: "auto" }} />
              <h3 className="text-lg font-medium pt-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">Beatufiful Desing</h3>
              <p className="py-2 text-yellow-50">Creating elegant designs suited for you needs design theory</p>
              <h4 className="py-4 text-teal-600">Desgin tools I use</h4>
              <p className="text-yellow-200 py-1">Photoshop</p>
              <p className="text-yellow-200 py-1">Illustrator</p>
              <p className="text-yellow-200 py-1">Figma</p>
            </div>
          </div>
        </section>
        {/*Section 3 Portfolio */}
        <section>
          <div className="text-med py-5 leading-8 text-yellow-50 md:text-xl max-w-xl mx-auto shadow-2xl shadow-cyan-500/50 p-10 rounded-xl my-10">
            <h3 className="text-3xl py-2 text-center md:text-4x bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-yellow-50 md:text-xl max-w-xl mx-auto">
              Since the beginning of my journey as a freelance developer,I`ve done remote work for
              <span className="text-teal-500"> agencies</span> consuldet for <span className="text-teal-500">startups</span> and cpllaborated white talanted people to create digital products for both
              busness and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-yellow-200 md:text-xl max-w-xl mx-auto ">I offer from a wide range of services,including</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rouded-lg object-cover shadow-2xl shadow-cyan-500/50" style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rouded-lg object-cover shadow-2xl shadow-cyan-500/50" style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rouded-lg object-cover shadow-2xl shadow-cyan-500/50" style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rouded-lg object-cover shadow-2xl shadow-cyan-500/50" style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rouded-lg object-cover shadow-2xl shadow-cyan-500/50" style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rouded-lg object-cover shadow-2xl shadow-cyan-500/50" style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
