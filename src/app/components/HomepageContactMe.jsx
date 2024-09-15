import React from "react";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";

const HomepageContactMe = () => {
  return (
    <div>
      <div id="Projects" className="flex justify-center items-center mt-10 mb-5 text-5xl font-montseratt font-bold">
        Let&apos;s Connect!
      </div>
      <div className="flex justify-center">
        <div className="flex self-center flex-col md:flex-row shadow-lg rounded-2xl p-4 w-3/5 bg-primary m-2">
          <div className="md:w-1/3 flex justify-center items-center"> 
            <img
              src="/images/professional.webp"
              alt="Profile"
              className="object-cover rounded-lg bg-neutral-100 mask mask-squircle"
            />
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 md:ml-4 flex flex-col justify-center">
            <form action="https://api.web3forms.com/submit" method="POST">

            <input type="hidden" name="access_key" value="06898dee-aec1-4979-a6a1-194c5dc8d41d"></input>
            <input type="hidden" name="subject" value="Message from your portfolio"></input>
            <input type="hidden" name="from_name" value="sakibshahon.netlify.app"></input>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-200 font-bold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-slate-600 border rounded-lg focus:outline-none focus:border-secondary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-200 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-slate-600 px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-secondary hover:bg-accent text-black px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </form>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageContactMe;
