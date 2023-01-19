import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import edward from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

import { useState } from "react";
import NavBar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Edward Passagi</title>
          <meta name="description" content="Edward Passagi Portofolio Site" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                Edward Passagi
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-teal-50">
                Software Engineer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
                Software Engineering professional with demonstrated experience
                providing software development lifecycle (SDLC) support in
                highly technical industries. Specializes in back-end app
                development and data structure, with AI/ML experiences.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-100">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div
              className="relative mx-auto mb-10 bg-gradient-to-b from-teal-500 
          rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96"
            >
              <Image
                src={edward}
                fill
                objectFit="cover"
                alt="Edward 3D image"
              />
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white">
                Services I offer
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I finished my Master of Computer Science (MCS) at the{" "}
                <span className="text-orange-600">
                  University of Illinois at Urbana-Champaign
                </span>{" "}
                on <span className="text-violet-800">December 2022</span>. I am
                interested in contributing what I&apos;ve learned into
                meaningful work and solving complex challenges.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-orange-50">
                <Image
                  src={design}
                  width={100}
                  height={100}
                  className="mx-auto"
                  alt="Design Image"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory
                </p>
                <h4 className="font-medium py-4 text-teal-600">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-orange-50">
                <Image
                  src={code}
                  width={100}
                  height={100}
                  className="mx-auto"
                  alt="Design Image"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Industry-standard Code
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory
                </p>
                <h4 className="font-medium py-4 text-teal-600">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-orange-50">
                <Image
                  src={consulting}
                  width={100}
                  height={100}
                  className="mx-auto"
                  alt="Design Image"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  People-first Consulting
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory
                </p>
                <h4 className="font-medium py-4 text-teal-600">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
              <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
                I finished my Master of Computer Science (MCS) at the{" "}
                <span className="text-orange-600">
                  University of Illinois at Urbana-Champaign
                </span>{" "}
                on <span className="text-violet-800">December 2022</span>. I am
                interested in contributing what I&apos;ve learned into
                meaningful work and solving complex challenges.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
