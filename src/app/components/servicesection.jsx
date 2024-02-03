import React from "react";

const ServiceSection = () => {
  return (
    <section className="m-5">
      <div className="flex justify-center items-center mt-5 mb-5 text-5xl font-montseratt font-bold">
        My Skillset
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="flex lg:w-1/3 w-full flex-grow card bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black duration-300 ease-in-out">
          <div className="p-3">
            <h2 className="text-lg font-bold mb-3 text-center font-sans">
              Web Development
            </h2>
            <h3 className="font-semibold mb-2">
              Build Websites that Captivate , Convert &amp; Delight. With a Focus on
              Performance &amp; Security.
            </h3>
            <ul className="list-disc">
              <li>Craft pixel-perfect designs with Tailwind &amp; Bootstrap.</li>
              <li>Orchestrate seamless experiences with React.js &amp; Node.js.</li>
              <li>Engineer robust back-ends using Laravel &amp; Express.js.</li>
              <li>Masterfully manage data with MongoDB, MySQL, &amp; SQL.</li>
              <li>Ensure flawless code collaboration with Git &amp; GitHub.</li>
            </ul>
          </div>
        </div>
        <div className="divider lg:divider-horizontal hover:divider-accent">
          O
        </div>
        <div className="flex lg:w-1/3 w-full flex-grow card bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black duration-300 ease-in-out">
          <div className="p-3">
            <h2 className="text-lg font-bold mb-3 text-center font-sans">
              Data Analytics &amp;amp; Visualization
            </h2>
            <h3 className="font-semibold mb-3">
              Untangle Your Data. Unleash Insights.
            </h3>
            <ul className="list-disc">
              <li>Craft compelling visuals with Seaborn &amp; Matplotlib.</li>
              <li>Extract hidden gems using Selenium &amp; Beautiful Soup.</li>
              <li>
                Build powerful models with Pandas, Scikit-learn &amp; TensorFlow.
              </li>
              <li>
                Architect Deep Learning Solutions with CNNs, RNNs, and TensorFlow/PyTorch.
              </li>
              <li>
                Natural Language Processing with NLTK, spaCy, and more.
              </li>
            </ul>
          </div>
        </div>
        <div className="divider lg:divider-horizontal hover:divider-accent">
          O
        </div>

        <div className="flex lg:w-1/3 w-full flex-grow card bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black duration-300 ease-in-out">
          <div className="p-3">
            <h2 className="text-lg font-bold mb-3 text-center font-sans">
              Machine Learning &amp;amp; AI
            </h2>
            <h3 className="font-semibold mb-3">
              Teaching machines to solve problems.
            </h3>
            <ul className="list-disc">
              <li>Predict trends &amp; outcomes with accuracy using Prophet, ARIMA, &amp; LSTMs. Drive smart business decisions.</li>
              <li>Tackle complex challenges with cutting-edge frameworks like PyTorch &amp; Keras.</li>
              <li>Build captivating user experiences with TensorFlow &amp; scikit-learn recommendations. Boost engagement &amp; revenue</li>
              <li>Ensure seamless model deployment with CI/CD pipelines &amp; Docker containers. Optimize scalability &amp; reliability.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-5 mb-8">
        <button className="btn btn-ghost btn-outline btn-lg rounded-full shadow-md hover:border-base-100 hover:shadow-black hover:scale-110 transition duration-300 ease-in-out">
          View skills in detail
        </button>
      </div>
    </section>
  );
};

export default ServiceSection;
