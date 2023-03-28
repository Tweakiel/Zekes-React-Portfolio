import React, { useState, useEffect } from "react";

const ContactMe = () => {
  //i have a form with name, email, message
  //when the form is submitted, i want to send the data to be displayed on my console and then clear the form
  //i want to use the useState hook to set the initial state of the form to empty
  //i want to use the useEffect hook to clear the form after the data is sent to the console

  return (
    <div className="max-w-md mx-auto my-10">
      <h2 className="text-5xl font-bold mb-5">Contact Me</h2>
      <form className="space-y-4" onSubmit>
        <div>
          <label className="text-2xl block font-medium mb-" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label className=" text-2xl block font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div>
          <label className=" text-2xl block font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            name="message"
            id="message"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
