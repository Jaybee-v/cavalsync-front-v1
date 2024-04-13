import React from "react";

export const CreatePost = () => {
  return (
    <div className=" w-full rounded-md bg-base-100 mb-4 shadow shadow-neutral p-6">
      <h2 className="font-semibold">Vous souhaitez partager quelque chose ?</h2>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Ecrivez votre publication</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24 bg-gray-100"
          placeholder="Bio"
        ></textarea>
        <div className="label flex justify-end">
          <span className="label-text-alt">500 / 2000 caractères</span>
        </div>
      </label>
      <article className="flex justify-center">
        <button className="btn btn-primary uppercase btn-sm">
          Poster ma publication
        </button>
      </article>
    </div>
  );
};
