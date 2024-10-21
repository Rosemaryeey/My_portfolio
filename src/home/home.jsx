import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../home/home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Img from "../assets/nice2.png";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";


// project.......//
// cd
import emailjs from "@emailjs/browser";
import Flipcard from "../flip/flipcard.jsx";
import DownloadButton from "../flip/downloadbutton";
import CallButton from "../flip/callbutton";

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
    <div className=" flex flex-col items-center justify-around h-[100%] w-[100%] gap-y-10">
      {/* home............................. */}
      <div
        id="home"
        data-aos="fade-left"
        className=" bo te section md:w-[100%]  flex items-start justify-center  "
      >
        <div
          className=" h-fit pt-20 md:w-[95%] w-[100%] flex items-center justify-center 
          px-5 md:flex-row flex-col-reverse "
        >
          <div className="md:w-[85vw] w-[90vw] h-fit gap-y-10  md:flex-row flex-col-reverse  flex md:items-start items-center justify-around  ">
            <section className=" te text md:w-[40vw] w-[90vw] h-fit gap-y-5  p-5 flex flex-col items-start justify-around ">
              <p className="tex text md:text-2xl text-3xl  font-serif">
                Hi I'm Rosemary
              </p>
              <h1 className="text md:text-5xl text-4xl  font-serif h-fit">
                A <span className=" spen  text-yellow-500"> </span>
              </h1>
              <p className="text md:text-xl ">
                Passionate about crafting impactful, user-centric solutions with
                modern tech and clean code. Blends creativity and technical
                prowess for top-tier results.
                <br />
              </p>

              <div
                className=" flex items-center justify-around md:w-[30vw] w-[50vw] md:h-[3rem] h-[5vh] text-yellow-500 
           
              "
              >
                <div
                  className=" md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh]

              "
                >
                  <Link
                    to="https://www.linkedin.com/in/rosemary-oguezuonu-ndubuizu-a032a4288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className=" icon  flex items-center justify-center md:h-[2.5rem] h-[5vh]  md:w-[2.5rem] w-[5vh] border-2 border-yellow-500 rounded-full
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
                rem] w-[17rem]"
              >
                <CallButton />
                <button className=" btn md:w-[8rem] w-[150px]    md:h-[3rem] h-[50px] border-2  border-yellow-500 rounded-3xl ">
                  {" "}
                  Get Resume
                </button>
              </div>
            </section>

            {/* <!--- image--> */}

            <section
              className="z-0 md:w-[40vw] w-[85vw]   md:h-[60vh] h-[65vh] p-5 flex flex-col items-center justify-center 
            "
            >
              <div
                className=" im rounded-full md:w-[20rem] w-[250px] md:h-[20rem] h-[250px] flex items-center justify-center bg-yellow-500
             "
              >
                <img
                  className="img shadow-xl shadow-black  rounded-full  md:w-[20rem] w-[200px] md:h-[20rem] h-[200px]"
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
          className="  bo te font-serif section md:w-[100%] w-[100%] flex  items-center justify-center    "
        >
          <main className=" h-fit flex flex-col items-center md:justify-around justify-between   ">
            <h1 className=" te md:text-6xl text-4xl font-bold font-serif py-3 h-[20vh]">
              <span className=" border-b-4 border-yellow-500"> Abou</span>t{" "}
              <span className="text-yellow-500">Me</span>
            </h1>
            <div className=" h-fit md:w-[90vw]  flex items-center justify-center  px-5 ">
              <div className=" te md:w-[85vw] w-[80vw] h-fit  flex md:items-center items-center justify-around  md:flex-row  flex-col-reverse ">
                <section className=" text md:w-[40vw] w-[90vw]  p-5 flex flex-col items-center justify-around ">
                  <div className="flex flex-col items-start justify-around  space-y-5  ">
                    <h2 className="text-2xl text-yellow-500">It's Rosemary</h2>
                    <p className="py-3">
                      As a passionate full-stack JavaScript developer, I bring
                      three years of experience in web development, including
                      HTML, CSS, and JavaScript. I've contributed to two
                      significant projects and honed my skills through tech hubs
                      and real-world experience.
                    </p>
                    <DownloadButton />
                  </div>
                </section>

                <section className=" text md:w-[40vw] w-[90vw]  space-y-5 p-5 flex flex-col items-center justify-around  ">
                  <div className=" md:w-[35vw] w-[90vw] flex md:flex-col flex-row sm:items-start items-center justify-around  md:h-[60vh] h-[35vh]">
                    <aside className=" flex items-center  justify-around md:w-[40vw] w-[58vw] md:h-[20vh] h-[30vh] ">
                      <div className=" shadow-md shadow-yellow-500 bo md:w-[15vw] w-[22vw] md:h-[25vh] h-[25vh] rounded-2xl  flex flex-col p-6 justify-around items-center border-white  border-2 md:text-sm text-[0.79rem]">
                        <span
                          className="
                    text-yellow-500 text-3xl "
                        >
                          2+
                        </span>{" "}
                        Years Of Exprience
                      </div>
                      <div className=" border-white  border-2 md:w-[15vw] w-[22vw] md:h-[25vh] h-[25vh] rounded-2xl  flex flex-col p-6 justify-around items-center  shadow-md shadow-yellow-500 md:text-sm text-[0.79rem]">
                        <span
                          className="
                    text-yellow-500 text-3xl "
                        >
                          20+
                        </span>{" "}
                        Complete projects
                      </div>
                    </aside>
                    <aside className=" flex items-center  justify-around md:w-[20vw] w-[25vw] md:h-[20vh] h-[30vh] ">
                      <div
                        className=" border-white  border-2 md:w-[15vw] w-[22vw] md:h-[25vh] h-[25vh] rounded-2xl  flex flex-col p-6 justify-around items-center md:ml-[1vw] ml-0
                  shadow-md shadow-yellow-500 md:text-sm text-[0.79rem] "
                      >
                        <span
                          className="
                    text-yellow-500 text-3xl "
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
        <div className="  h-fit w-[100%]   flex items-start justify-center    ">
          <div className=" h-fit md:w-[95vw] w-[90vw] flex items-center justify-around px-5 md:flex-col flex-col ">
            <h1 className="te  md:text-6xl text-4xl font-extrabold h-[15vh] w-[100%] font-serif flex justify-center items-center ">
              <h2 className="pan">
                <span className="text-yellow-500"> P</span>roj
              </h2>
              ects
            </h1>
            <main className=" h-fit  bg-transparent text-yellow-500  ">
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
        <div className="  flex flex-col items-center md:justify-around justify-between  md:w-[95vw] w-[100%]  h-fit space-x-5  space-y-10  ">
          <h1 className=" te md:text-6xl text-4xl w-[85vw] h-[15vh]  flex items-center justify-center font-extrabold font-serif  ">
            <span className=" pan  py-3  border-b-4 border-yellow-500">
              {" "}
              Serv
            </span>
            ices
          </h1>

          <div className=" bo flex flex-col  items-center justify-around h-fit space-y-7 md:w-[80vw] w-[85vw]   ">
            <div className=" flex md:items-center items-center justify-around  h-fit space-y-7  md:w-[80vw] text-yellow-500  md:flex-row flex-col">
              <div
                className=" oh p-3 md:w-[20vw] w-[80vw] md:h-[30vh] h-[12vh] rounded-3xl hover:bg-white flex flex-col items-start justify-center  shadow-yellow-500 shadow-md 
            "
              >
                <h3 className="md:text-2xl text-xl  font-bold bg-transparent">
                  Fontend
                </h3>
                <p className="bg-transparent">
                  Will serve you With tailwind
                  <br />
                </p>
              </div>
              <div className="  oh flex flex-col items-start justify-center   md:w-[20vw] w-[80vw] md:h-[30vh] h-[12vh] rounded-3xl  px-5 hover:bg-white  shadow-yellow-500 shadow-md  ">
                <h3 className="md:text-2xl text-xl  font-bold bg-transparent">
                  Frontend
                </h3>
                <p className="bg-transparent">Will serve you with htmx</p>
              </div>

              <div className="  oh flex flex-col items-start justify-center   md:w-[20vw] w-[80vw] md:h-[30vh] h-[12vh] rounded-3xl  px-5 hover:bg-white  shadow-yellow-500 shadow-md  ">
                <h3 className="md:text-2xl text-xl  font-bold bg-transparent">
                  Frontend
                </h3>
                <p className="bg-transparent">
                  will serve you with react.js <br />
                </p>
              </div>
            </div>

            <div className=" flex items-center justify-around  h-fit space-y-7  md:w-[80vw] text-yellow-500  md:flex-row flex-col">
              <div className="  oh flex flex-col items-start justify-center  md:w-[20vw] w-[80vw] md:h-[30vh] h-[12vh] rounded-3xl  px-5 hover:bg-white  shadow-yellow-500 shadow-md ">
                <h3 className="md:text-2xl text-xl  font-bold bg-transparent">
                  Frontend
                </h3>
                <p className="bg-transparent">
                  will serve you with Next.js <br />
                </p>
              </div>
              <div className="  oh flex flex-col items-start justify-center   md:w-[20vw] w-[80vw] md:h-[30vh] h-[12vh] rounded-3xl  px-5 hover:bg-white  shadow-yellow-500 shadow-md ">
                <h3 className="md:text-2xl text-xl  font-bold bg-transparent">
                  Backend
                </h3>
                <p className="bg-transparent">
                  {" "}
                  will serve you with flutter
                  <br />
                </p>
              </div>
              <div className=" oh flex flex-col items-start justify-center  md:w-[20vw] w-[80vw] md:h-[30vh] h-[12vh] rounded-3xl  px-5 hover:bg-white  shadow-yellow-500 shadow-md ">
                <h3 className="md:text-2xl text-xl  font-bold bg-transparent">
                  Backend
                </h3>
                <p className="bg-transparent">
                  Serve you With express.js
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
        className="te section md:w-[100%] flex items-start justify-center h-fit "
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
              className="flex md:h-[60vh] h-[90vh] items-center justify-around md:w-[80vw] w-[90vw] md:flex-row flex-col"
            >
              <div className="flex flex-col items-center justify-around md:h-[55vh] h-full md:w-[50vw] w-[85vw]">
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="md:w-[35vw] w-[75vw] px-5 md:h-[7vh] h-[8vh] rounded-2xl border-yellow-500 border-2 bg-transparent"
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name}</span>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Example@gmail.com"
                    className="md:w-[35vw] w-[75vw] px-5 md:h-[7vh] h-[8vh] rounded-2xl border-yellow-500 border-2 bg-transparent"
                    autoComplete="off"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <input
                    type="tel"
                    name="number"
                    placeholder="+1"
                    className="md:w-[35vw] w-[75vw] px-5 md:h-[7vh] h-[8vh] rounded-2xl border-yellow-500 border-2 bg-transparent"
                  />
                  {errors.number && (
                    <span className="text-red-500">{errors.number}</span>
                  )}
                </div>
              </div>

              <div className="md:h-[50vh] h-[60vh] flex flex-col md:w-[40vw] w-[80vw] justify-around items-center">
                <section className="flex flex-col">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    id="message"
                    className="p-3 md:h-[30vh] h-[20vh] md:w-[30vw] w-[75vw] border-2 border-yellow-500 rounded-2xl bg-transparent"
                  />
                  {errors.message && (
                    <span className="text-red-500">{errors.message}</span>
                  )}
                </section>
                <button
                  type="submit"
                  className="button md:w-[200px] w-[150px] md:h-[6vh] h-[40px] sm:relative md:right-0 right-[25vw] bg-yellow-500 rounded-full text-black"
                >
                  Send
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Home;
