import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form action="" className="flex flex-col max-w-[600px] w-full">
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
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        {/* <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="my-4 p-2 bg-[#ccd6f6]"
        /> */}
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={10}
          className="my-4 p-2 bg-[#ccd6f6]"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-200 hover:rounded">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
