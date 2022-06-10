import React from 'react';

const ContactForm = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-600 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/ea27974d-2487-4cae-bbe4-491bbf94a8f6"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Get in touch
          </p>
          <p className="text-gray-300 py-4">
            Send an email to hasibmiraz09@gmail.com
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="my-4 p-2 bg-[#ccd6f6]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="my-4 p-2 bg-[#ccd6f6]"
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={10}
          className="my-4 p-2 bg-[#ccd6f6]"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-200 hover:rounded">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
