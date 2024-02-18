import React from "react";

const ExperienceTimeline = () => {
  return (
    <section>
      <div
        className="flex justify-center items-center mt-5 mb-5 text-5xl font-montseratt font-bold"
        id="Skills"
      >
        Professional Experience
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Full Stack Web Developer <br /> @ Incevio </h2>
            <div className="badge badge-secondary">Working Here!</div>
            <p className="text-justify">
              Worked as a full stack web developer with focus on the backend. My
              responsibilities include building and maintaining the backend of
              the website, develop API, integrate third party API such as
              payment gateways and also the frontend. I also work on the
              database , deployment and fix clients issues or deliver custom
              features for specific clients.
            </p>
            <div className="card-actions justify-end">
                <div className="badge badge-outline">Laravel</div>
                <div className="badge badge-outline">MySQL</div>
                <div className="badge badge-outline">Bootstrap</div>
                <div className="badge badge-outline">Ajax</div>
                <div className="badge badge-outline">Jquery</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Software engineer @ Data Sapience Lab</h2>
            <p className="text-justify">
              I worked as a software engineer to deliver machine learning and
              data analytics and Visualization solution for clients. I also
              worked on building web applications for small to medium businesses
              and startups.
            </p>
            <p className="text-justify">
              My responsibilities also included mentoring new developers on the
              team and organizing small team of 3-5 people to plan and execute
              projects on time.
            </p>
            <div className="card-actions justify-end mt-5">
              <div className="badge badge-outline">Python</div>
              <div className="badge badge-outline">Pandas</div>
              <div className="badge badge-outline">Numpy</div>
              <div className="badge badge-outline">Pytorch</div>
              <div className="badge badge-outline">Tensorflow</div>
              <div className="badge badge-outline">Scikit-learn</div>
              <div className="badge badge-outline">React.js</div>
              <div className="badge badge-outline">Node.js</div>
              <div className="badge badge-outline">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
