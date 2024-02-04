import React from "react";

const HomepageTimeLine = () => {
  return (
    <div className="container mx-auto px-4">
      <div
        id="Experience"
        className="flex justify-center items-center mt-10 mb-5 text-5xl font-montseratt font-bold"
      >
        My Journey
      </div>
      <div className="text-center mt-10 mb-10">
        <blockquote className="italic text-lg font-medium text-slate-500">
          &quote;Programming has been an amazing journey for me. It&apos;s not
          just about writing code, but a passion that burns bright in my soul.
          Each line of code I write is a step towards turning ideas into
          reality. It&apos;s a constant learning process that never ceases to
          amaze me.&quote;
        </blockquote>
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10  bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
            <time className="font-mono italic">2003</time>
            <div className="text-lg font-black ">That Magic Moment</div>
            <p className="text-justify">
              When I first saw a computer, it was nothing short of magic for me.
              The fascination of how a machine could do so many things created
              an impression that lasted a lifetime. My passion for programming
              is like a raging fire today and this is when the spark was
              ignited.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
            <time className="font-mono italic">2014</time>
            <div className="text-lg font-black">Hello World!!</div>
            <p className="text-justify">
              I wrote my first &quot;Hello World&quot; in python. It was the
              first time I wrote a program and saw the output. It was a magical
              moment for me. I was fascinated by the fact that I could write a
              few lines of code and make the computer do what I wanted it to do.
              That was the moment I fell in love with programming. This is where
              my journey of a lifetime began.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10 bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Out of the terminal</div>
            <p className="text-justify">
              First time I wrote a program that had a graphical user interface.
              Well it was more of HTML page with some CSS and JavaScript. But it
              was a big deal for me. I was amazed by the fact that I could write
              code and see the output in a browser. It was a big leap for me. I
              was no longer confined to the terminal. I was out in the open
              world of the web. To see this visually and play around with css
              properties was really fun.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
            <time className="font-mono italic">2016</time>
            <div className="text-lg font-black">
              Is that programming I &apos;C&apos; ?
            </div>
            <p className="text-justify">
              Although I had been writing code for a while, I had never written
              a program in C. But from the moment I wrote my first program in C,
              I decided I wanted to learn more about it. It was difficult for
              sure, But I wanted to not just learn it, but master it. I wanted
              to know the ins and out. From this point on programming was no
              longer just a hobby, it was a passion.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10 bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
            <time className="font-mono italic">2019</time>
            <div className="text-lg font-black">Algorithm for Passion</div>
            <p className="text-justify">
              I enrolled in a CSE program in JKKNIU. And here began the true
              hard core programming journey. I was introduced to the world of
              algorithms and data structures. Long sleepless nights, countless
              hours of coding, and hundreds of problems to solve. Problems
              solving became my passion. I was no longer just writing code to
              show output, I was writing code to squeeze out every last bit of
              performance. In this part of my life I learned more debugging,
              sharpened my logical skills an became part of a community of
              competitive programmers.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
            <time className="font-mono italic">2021</time>
            <div className="text-lg font-black">It can Learn !!!</div>
            <p className="text-justify">
              I stepped into the world of machine learning and artificial
              intelligence. I was fascinated how a computer can learn from data.
              I started learning about it on kaggle. I analyzed and visualized
              data, and built machine learning models. It opened up a whole new
              world for me. Where I could use my programming skills to solve
              real world problems. I was writing code that could learn, predict
              and make decisions.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10 bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">Passion & Profession</div>
            <p className="text-justify">
              At the beginning of the year, I started working as a part-time
              freelance software engineer focused on machine learning , data
              analytics and web development projects. I was no longer just
              writing code for fun, but as a profession. I was writing code that
              solved real world business and research problems for my clients. I
              learned to handle clients, manage deadlines, and work in a team.
              My technical skills grew in leaps and bounds. As I gained hands on
              experience in working with legacy code, version control, and
              deployment. <br />
              Later in the year in late november, I joined the amazing team at
              &apos;Incevio&apos; as a full-time Web developer intern.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black">Learner of a lifetime</div>
            <p className="text-justify">
              I am still learning, still writing code, still solving problems.
              My passion still burns bright. And my thirst for mastering new
              Technology is unquenchable. Currently I am learning more about
              Cloud computing , code architecture and system design. Honing my
              refactoring skills and learning more on how to write code that
              reads as beautifully as a poem and as efficiently as a machine. I
              am also trying to grow the Mymensingh programmers community and
              give back to the community by contributing to open source projects
              and mentoring young programmers.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomepageTimeLine;
