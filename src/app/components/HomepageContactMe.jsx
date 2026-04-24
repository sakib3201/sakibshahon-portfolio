"use client";
import React, { useState, useRef } from "react";

const STATUS = { IDLE: "idle", SUBMITTING: "submitting", SUCCESS: "success", ERROR: "error" };

const HomepageContactMe = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SUBMITTING);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(formRef.current))),
      });

      if (res.ok) {
        setStatus(STATUS.SUCCESS);
      } else {
        setStatus(STATUS.ERROR);
      }
    } catch {
      setStatus(STATUS.ERROR);
    }
  };

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
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[70ch]">
            Open channels for project collaboration, architectural consultation,
            or just to say hello.
          </p>
        </div>
        <div className="md:col-span-7 bg-surface-container-high border border-outline-variant p-md">
          {status === STATUS.SUCCESS ? (
            <div className="flex items-center justify-center h-full min-h-[300px]">
              <div className="text-center">
                <div className="font-data-mono text-data-mono text-primary-container mb-sm">
                  MESSAGE_DELIVERED
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-[70ch]">
                  Transmission received. Expect a response within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-md">
              <input type="hidden" name="access_key" value="06898dee-aec1-4979-a6a1-194c5dc8d41d" />
              <input type="hidden" name="subject" value="Message from your portfolio" />
              <input type="hidden" name="from_name" value="sakibshahon.netlify.app" />

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
                  required
                  autoComplete="name"
                  placeholder="Enter identification string..."
                  className="bg-surface-container-lowest border-0 border-b border-outline-variant text-on-surface font-body-md focus:ring-0 focus:border-primary-container transition-colors duration-200 py-xs px-0 placeholder:text-on-surface-variant/30 outline-none"
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
                  required
                  autoComplete="email"
                  placeholder="Enter routing address..."
                  className="bg-surface-container-lowest border-0 border-b border-outline-variant text-on-surface font-body-md focus:ring-0 focus:border-primary-container transition-colors duration-200 py-xs px-0 placeholder:text-on-surface-variant/30 outline-none"
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
                  required
                  placeholder="Enter transmission data..."
                  rows={4}
                  className="bg-surface-container-lowest border-0 border-b border-outline-variant text-on-surface font-body-md focus:ring-0 focus:border-primary-container transition-colors duration-200 py-xs px-0 placeholder:text-on-surface-variant/30 outline-none resize-y"
                />
              </div>

              {status === STATUS.ERROR && (
                <div className="font-data-mono text-[12px] text-error border-b border-error pb-xs">
                  TRANSMISSION_FAILED // Retry in a moment
                </div>
              )}

              <button
                type="submit"
                disabled={status === STATUS.SUBMITTING}
                className="bg-primary-container text-on-primary-container font-data-mono text-label-caps uppercase px-md py-sm rounded-none w-fit hover:bg-primary-fixed transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === STATUS.SUBMITTING ? "TRANSMITTING..." : "EXECUTE TRANSMISSION"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomepageContactMe;
