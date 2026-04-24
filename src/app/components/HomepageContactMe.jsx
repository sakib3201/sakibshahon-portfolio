import React from "react";

const HomepageContactMe = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
        <div className="md:col-span-5 flex flex-col gap-md">
          <span className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest animate-glitch">
            {"// INITIATE CONNECTION"}
          </span>
          <h2 className="font-display-poetry text-display-poetry text-primary-fixed">
            Transmit Request
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Open channels for project collaboration, architectural consultation,
            or just to say hello.
          </p>
        </div>
        <div className="md:col-span-7 bg-surface-container-high border border-outline-variant p-md">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-md"
          >
            <input
              type="hidden"
              name="access_key"
              value="06898dee-aec1-4979-a6a1-194c5dc8d41d"
            />
            <input
              type="hidden"
              name="subject"
              value="Message from your portfolio"
            />
            <input
              type="hidden"
              name="from_name"
              value="sakibshahon.netlify.app"
            />
            <div className="flex flex-col gap-xs">
              <label
                htmlFor="id_name"
                className="font-data-mono text-data-mono text-primary-container uppercase"
              >
                IDENTIFIER [NAME]
              </label>
              <input
                type="text"
                id="id_name"
                name="name"
                placeholder="Enter identification string..."
                className="bg-surface-container-lowest border-0 border-b border-outline-variant text-on-surface font-body-md focus:ring-0 focus:border-primary-container transition-colors py-2 px-0 placeholder:text-on-surface-variant/30 outline-none"
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label
                htmlFor="id_email"
                className="font-data-mono text-data-mono text-primary-container uppercase"
              >
                ROUTING [EMAIL]
              </label>
              <input
                type="email"
                id="id_email"
                name="email"
                placeholder="Enter routing address..."
                className="bg-surface-container-lowest border-0 border-b border-outline-variant text-on-surface font-body-md focus:ring-0 focus:border-primary-container transition-colors py-2 px-0 placeholder:text-on-surface-variant/30 outline-none"
              />
            </div>
            <div className="flex flex-col gap-xs mb-sm">
              <label
                htmlFor="id_payload"
                className="font-data-mono text-data-mono text-primary-container uppercase"
              >
                PAYLOAD [MESSAGE]
              </label>
              <textarea
                id="id_payload"
                name="message"
                placeholder="Enter transmission data..."
                rows={4}
                className="bg-surface-container-lowest border-0 border-b border-outline-variant text-on-surface font-body-md focus:ring-0 focus:border-primary-container transition-colors py-2 px-0 placeholder:text-on-surface-variant/30 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-container text-on-primary-container font-data-mono text-data-mono uppercase px-6 py-3 rounded-none w-fit hover:bg-primary-fixed transition-colors"
            >
              EXECUTE TRANSMISSION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomepageContactMe;
