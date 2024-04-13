import React from "react";

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[url('/images/social4.jpeg')] relative">
      {/* <div className="hero-overlay bg-opacity-60 absolute h-full w-full"></div> */}
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md md:max-w-lg grid gap-6">
          <h1 className="mb-5 text-5xl font-bold text-primary">CavalSync</h1>
          <h2 className="text-lg md:text-3xl font-semibold text-primary">
            Le premier réseau social dédié aux cavaliers
          </h2>
          <p className="mb-5 text-white bg-gray-400 bg-opacity-40 p-4">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <section className="flex justify-evenly">
            <button className="btn btn-primary btn-outline uppercase">
              S&apos;inscrire
            </button>
            <button className="btn btn-primary uppercase">Se connecter </button>
          </section>
        </div>
      </div>
    </div>
  );
};
