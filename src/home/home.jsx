import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Img from "../assets/WhatsApp_Image_2025-09-11_at_15.35.35_36d7d231-removebg-preview.png";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";

// project.......//
// cd
import emailjs from "@emailjs/browser";
import Flipcard from "../components/flipcard.jsx";
import DownloadButton from "../components/downloadbutton.jsx";
import CallButton from "../components/callbutton.jsx";

// contact

export const Home = () => {
  const [errors, setErrors] = useState({});
  const form = useRef();

  useEffect(() => {
    Aos.init({ duration: 600, delay: 200 });
  }, []);

  const validateForm = () => {
    const formErrors = {};
    const formData = form.current;

    // Name validation
    if (!formData.from_name.value.trim()) {
      formErrors.name = "Name is needed.";
      formErrors.name = "Name is needed.";
    }

    // Email validation (basic)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.from_email.value.trim()) {
      formErrors.email = "Email is needed.";
      formErrors.email = "Email is needed.";
    } else if (!emailPattern.test(formData.from_email.value)) {
      formErrors.email = "Please enter a valid email address.";
    }

    // Phone number validation
    if (!formData.number.value.trim()) {
      formErrors.number = "Phone number is needed.";
      formErrors.number = "Phone number is needed.";
    } else if (!/^\+?\d{1,15}$/.test(formData.number.value)) {
      formErrors.number = "Please enter a valid phone number.";
    }

    // Message validation
    if (!formData.message.value.trim()) {
      formErrors.message = "Message is needed.";
      formErrors.message = "Message is needed.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Prevent submission if validation fails

    emailjs
      .sendForm("service_d2c48hs", "template_mjyxfod", form.current, {
        publicKey: "KrOAwyrkR9ZkwzmvJ",
      })
      .then(
        () => {
          alert("Message sent successfully!"); // Success alert
          form.current.reset(); // Reset form fields
          setErrors({}); // Clear any existing errors
        },
        (error) => {
          alert("Failed to send message. Please try again."); // Failure alert
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className=" flex flex-col items-center justify-around min-h-fit md:gap-y-28 gap-y-10 bm ">
      {/* home............................. */}
      <div
        id="home"
        data-aos="fade-left"
        className=" bo te md:pt-52 pt-10 w-[95vw]  flex justify-center   "
      >
        <div
          className="  pt-0 md:w-[95%] w-[100%] flex items-center justify-center 
          px-5 md:flex-row flex-col-reverse "
        >
          <div className=" w-[90vw] h-fit gap-y-10  md:flex-row flex-col-reverse  flex md:items-start items-center justify-around  font-serif ">
            <section className=" te text md:w-[45vw] w-[90vw] h-fit gap-y-5  p-5 flex flex-col md:items-start items-center justify-around ">
              <p className="tex text md:text-2xl text-3xl ">Hi I'm Rosemary</p>
              <h1 className="text md:text-5xl text-4xl   h-fit w-3/4 ">
                A <span className=" spen  text-yellow-500 "> </span>
              </h1>
              <p className="md:text-xl text-base md:text-left text-center ">
                Passionate about crafting impactful, user-centric solutions with
                modern tech and clean code. Blends creativity and technical
                prowess for top-tier results.
                <br />
              </p>

              <div
                className=" flex items-center md:justify-start justify-center md:w-[30vw] w-[50vw] space-x-3 h-fit text-yellow-500 
           
              "
              >
                <div
                  className=" md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh]

              "
                >
                  <Link
                    to="https://www.linkedin.com/in/rosemary-oguezuonu-ndubuizu-a032a4288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className=" icon  flex items-center justify-center md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh]  border-2 border-yellow-500 rounded-full
              hover:text-white hover:bg-yellow-500   "
                  >
                    <BsLinkedin />
                  </Link>
                </div>

                <div className=" md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh]">
                  <Link
                    to="https://github.com/Rosemaryeey"
                    className="  icon  flex items-center justify-center md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh] border-2 border-yellow-500 rounded-full hover:text-white hover:bg-yellow-500 "
                  >
                    <BsGithub className=" bg-transparent" />
                  </Link>
                </div>

                <div className="md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh]">
                  <Link
                    to="https://www.instagram.com/rosvic2024?utm_source=qr&igsh=bjR5cDM5bDA2dWxt"
                    className="  icon  flex items-center justify-center md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh] border-2 border-yellow-500 rounded-full hover:text-white hover:bg-yellow-500 "
                  >
                    <BiLogoInstagramAlt className="" />
                  </Link>
                </div>

                <div className="md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh]">
                  <Link
                    to="https://x.com/NdubuizuUg77042?t=8KQfxrWJp8SmOw2Nv5CQXA&s=09"
                    className="  icon  flex items-center justify-center md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh] border-2 border-yellow-500 rounded-full hover:text-white hover:bg-yellow-500 "
                  >
                    <BsTwitterX className="bg-transparent" />
                  </Link>
                </div>
              </div>
              <div
                className="flex items-center justify-between md:w-[15
                rem] md:w-2/4 w-full "
              >
                <CallButton />
                <a
                  href="#project"
                  className="btn md:w-[8rem] w-[130px] md:h-[3rem] h-[50px] border-2 border-yellow-500 rounded-lg flex items-center justify-center"
                >
                  My Projects
                </a>
              </div>
            </section>

            {/* <!--- image--> */}

            <section
              className="z-0 md:w-[40vw] w-[85vw]   md:h-fit h-[50vh] p-5 flex flex-col items-center justify-center 
            "
            >
              <div
                className=" im rounded-full md:w-[20rem] w-[250px] md:h-[20rem] h-[250px] flex items-center justify-center bg-yellow-500
             "
              >
                <img
                  className="img shadow-xl shadow-black  rounded-full  md:w-[20rem] w-[250px] md:h-[20rem] h-[250px]"
                  src={Img}
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* About............................................. */}

      <>
        <div
          data-aos="fade-up"
          id="about"
          className="  bo te font-serif w-full  flex  items-center justify-center "
        >
          <main className=" h-fit flex flex-col items-center md:justify-around justify-between">
            <h1 className=" te md:text-6xl text-4xl font-bold font-serif py-3 xl:h-[15vh] ">
              <span className=" border-b-4 border-yellow-500"> Abou</span>t{" "}
              <span className="text-yellow-500">Me</span>
            </h1>
            <div className=" h-fit md:w-[95vw]  flex items-center justify-center  px-5  ">
              <div className=" te  md:w-[90vw] w-[90vw] h-fit  flex md:items-center items-center justify-around  md:flex-row  flex-col-reverse ">
                <section className=" text xl:w-[45vw] md:w-[40vw] w-[90vw]  p-5 flex flex-col items-center justify-around ">
                  <div className="flex flex-col md:items-start items-center justify-around  space-y-6  ">
                    <h2 className="md:text-2xl text-xl text-yellow-500">
                      {" "}
                      My Name Is Rosemary
                    </h2>
                    <p className="md:text-xl text-base md:text-left text-center  ">
                      As a passionate full-stack JavaScript developer, I bring
                      two years of experience in web development, including
                      HTML, CSS, and JavaScript. I've contributed to two
                      significant projects and honed my skills through tech hubs
                      and real-world experience.
                    </p>
                    <DownloadButton />
                  </div>
                </section>

                <section className=" text md:w-[45vw] w-[90vw]  space-y-5  p-5 flex flex-col items-center justify-around  ">
                  <div className=" md:w-[45vw] w-[90vw] flex flex-col  items-center justify-around xl:h-[60vh] md:h-[40vh] h-[60vh]   ">
                    <aside className=" flex items-center  justify-between md:w-[45vw] w-[90vw] xl:h-[25vh] md:h-[17vh] h-[25vh] md:px-0 px-2   ">
                      <div className="C shadow-md shadow-yellow-500 bo md:w-[20vw] w-[40vw] xl:h-[25vh] md:h-[17vh] h-[25vh] rounded-lg  flex flex-col p-6 justify-around items-center  text-lg ">
                        <span
                          className="
                    text-yellow-500 text-4xl "
                        >
                          2+
                        </span>{" "}
                        Years Of Exprience
                      </div>
                      <div className=" C  md:w-[20vw] w-[40vw] xl:h-[25vh] md:h-[17vh] h-[25vh] rounded-lg  flex flex-col p-6 justify-around items-center  shadow-md shadow-yellow-500  text-lg">
                        <span
                          className="
                    text-yellow-500 text-4xl "
                        >
                          20+
                        </span>{" "}
                        Complete projects
                      </div>
                    </aside>
                    <aside className=" flex items-center  justify-around md:w-[20vw] w-[90vw] xl:h-[25vh] md:h-[17vh] h-[25vh] ">
                      <div
                        className="C md:w-[20vw] w-[40vw] xl:h-[25vh] md:h-[17vh] h-[25vh]  rounded-lg  flex flex-col p-6 justify-around items-center md:ml-[1vw] ml-0
                  shadow-md shadow-yellow-500  text-lg "
                      >
                        <span
                          className="
                    text-yellow-500 text-4xl "
                        >
                          10+
                        </span>{" "}
                        life projects
                      </div>
                    </aside>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </>

      {/* Project........................................ */}

      <div data-aos="zoom-in" className=" te bo " id="project">
        <div className="  min-h-fit  w-[100%]   flex items-start justify-center  ">
          <div className=" min-h-fit md:w-[95vw] w-[90vw] flex items-center justify-between px-5 md:flex-col flex-col ">
            <h1 className="te  md:text-6xl text-4xl font-extrabold md:h-[10vh] w-[100%] font-serif flex justify-center items-start ">
              <h2 className="pan">
                <span className="text-yellow-500"> P</span>roj
              </h2>
              ects
            </h1>
            <main className="  h-fit py-6  bg-transparent text-yellow-500  ">
              <Flipcard />
            </main>
          </div>
        </div>
      </div>

      {/* Services............ */}

      <div
        data-aos="flip-right"
        id="services"
        className="  te  w-[100%]  flex md:items-center items-start justify-center h-fit      "
      >
        <div className="  flex flex-col items-center md:justify-around justify-between  md:w-[95vw] w-[100%]  h-fit  space-y-10  ">
          <h1 className=" te md:text-6xl text-4xl  w-[90vw] md:h-[15vh] h-[10vh]  flex items-center justify-center font-extrabold font-serif  ">
            <span className=" pan  md:py-3 py-2  border-b-4 border-yellow-500">
              {" "}
              Serv
            </span>
            ices
          </h1>

          <div className=" flex flex-col  items-center justify-around max-h-fit space-y-7 md:w-[90vw] w-[90vw] ">
            <div className=" flex md:items-center items-center justify-around sm:min-h-fit space-y-7 md:w-[90vw] text-yellow-500  md:flex-row flex-col ">
              <div
                className="C oh md:mt-6  p-4  md:gap-y-4 gap-y-2 md:w-[23vw] w-[80vw] md:h-[33vh] h-[25vh]  rounded-lg flex flex-col  items-center justify-center  shadow-yellow-500 shadow-md 
            "
              >
                <h3 className="   text-center md:text-2xl text-xl  font-bold bg-transparent">
                  Frontend Development
                </h3>
                <p className=" text-center bg-transparent">
                  Build responsive, modern, and user-friendly websites with
                  React and Tailwind.
                  <br />
                </p>
              </div>
              <div className=" C oh  p-4  md:gap-y-4 gap-y-2 md:w-[23vw] w-[80vw] md:h-[33vh] h-[25vh]  rounded-lg flex flex-col  items-center justify-center  shadow-yellow-500 shadow-md">
                <h3 className="   text-center md:text-2xl text-xl  font-bold bg-transparent">
                  Full-Stack Web Dev
                </h3>
                <p className="  text-center bg-transparent">
                  Develop complete web applications using React, Next.js, and
                  Node Express.js.
                </p>
              </div>

              <div className="C oh  p-4  md:gap-y-4 gap-y-2 md:w-[23vw] w-[80vw] md:h-[33vh] h-[25vh]  rounded-lg flex flex-col  items-center justify-center  shadow-yellow-500 shadow-md  ">
                <h3 className="   text-center md:text-2xl text-xl  font-bold bg-transparent">
                  Dashboard & Data Visualization
                </h3>
                <p className="  text-center bg-transparent">
                  Build interactive dashboards and charts for data-driven
                  decision making. <br />
                </p>
              </div>
            </div>

            <div className=" flex items-center justify-around  h-fit space-y-7  md:w-[90vw] text-yellow-500  md:flex-row flex-col">
              <div className="C oh md:mt-6  p-4  md:gap-y-4 gap-y-2 md:w-[23vw] w-[80vw] md:h-[33vh] h-[25vh]  rounded-lg flex flex-col  items-center justify-center  shadow-yellow-500 shadow-md">
                <h3 className="   text-center md:text-2xl text-xl  font-bold bg-transparent">
                  Backend & Support
                </h3>
                <p className="  text-center bg-transparent">
                  Build secure APIs, scalable backends, with continuous updates
                  and fixes. <br />
                </p>
              </div>
              <div className="C oh  p-4  md:gap-y-4 gap-y-2 md:w-[23vw] w-[80vw] md:h-[33vh] h-[25vh]  rounded-lg flex flex-col  items-center justify-center  shadow-yellow-500 shadow-md ">
                <h3 className="   text-center md:text-2xl text-xl  font-bold bg-transparent">
                  Website Optimization & CMS
                </h3>
                <p className="  text-center bg-transparent">
                  {" "}
                  Optimize speed, SEO, and manage efficient, customizable
                  business systems.
                  <br />
                </p>
              </div>
              <div className="C oh  p-4  md:gap-y-4 gap-y-2 md:w-[23vw] w-[80vw] md:h-[33vh] h-[25vh]  rounded-lg flex flex-col  items-center justify-center  shadow-yellow-500 shadow-md">
                <h3 className="   text-center md:text-2xl text-xl  font-bold bg-transparent">
                  Training & Consultation
                </h3>
                <p className="  text-center bg-transparent">
                  Guide individuals or teams on web development, frameworks, and
                  project structure for success.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact.............. */}

      <div
        data-aos="fade-up"
        id="contact"
        className="te  md:w-[100%] flex items-start justify-center h-fit "
      >
        <div className="flex flex-col items-center justify-start h-fit md:w-[85vw] w-[100%] p-5">
          <section className="flex flex-col items-center justify-around h-fit md:w-[80vw] w-[90vw]">
            <h1 className="te md:text-6xl text-4xl font-extrabold font-serif pb-3">
              <span className="border-b-4 border-yellow-500"> Cont</span>act{" "}
              <span className="text-yellow-500">Me</span>
            </h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="  flex  md:h-[60vh] h-[70vh] items-center justify-around md:w-[90vw] w-[90vw]  flex-col"
            >
              <div className="flex md:gap-10 gap-6 md:flex-row flex-col items-center  w-full  ">
                <div className="flex flex-col items-center justify-around  md:space-y- space-y-6  md:w-1/2">
                  <div className="flex flex-col items-start w-full ">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      className="md:w-full w-[80vw] px-5 md:h-[7vh] h-[8vh] rounded-lg border-yellow-500  border-2 bg-transparent"
                    />
                    {errors.name && (
                      <span className="text-red-500">{errors.name}</span>
                    )}
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Example@gmail.com"
                      className="md:w-full w-[80vw] px-5 md:h-[7vh] h-[8vh] rounded-lg border-yellow-500 border-2 bg-transparent"
                      autoComplete="off"
                    />
                    {errors.email && (
                      <span className="text-red-500">{errors.email}</span>
                    )}
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <input
                      type="tel"
                      name="number"
                      placeholder="+1"
                      className="md:w-full w-[80vw] px-5 md:h-[7vh] h-[8vh] rounded-lg border-yellow-500 border-2 bg-transparent"
                    />
                    {errors.number && (
                      <span className="text-red-500">{errors.number}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col  justify-around items-center md:w-1/2 ">
                  <section className="flex flex-col w-full">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      id="message"
                      className="p-3 md:h-[25vh] h-[20vh] md:w-full w-[80vw] border-2 border-yellow-500 rounded-lg bg-transparent"
                    />
                    {errors.message && (
                      <span className="text-red-500">{errors.message}</span>
                    )}
                  </section>
                </div>
              </div>
              <button
                type="submit"
                className="button md:w-full w-[80vw]  md:h-[8vh] h-[60px] sm:relative md:right-0 right-[25vw] bg-yellow-500 rounded-lg text-black font-semibold text-xl"
              >
                Send
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Home;
