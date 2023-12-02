"use client";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form data:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-10 overflow-hidden bg-cover sm:bg-right md:bg-left py-36  bg-no-repeat sm:bg-[url('https://images.pexels.com/photos/2748757/pexels-photo-2748757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:bg-[url('https://images.pexels.com/photos/1456737/pexels-photo-1456737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:w-[90vw] p-5 md:w-[35vw] md:backdrop-blur-sm">
      <h1 className="md:text-4xl sm:text-3xl ">Contact Us</h1>
      <div className="m-2 flex flex-col">
        <label className="">Name:</label>
        <input
          className="px-5 py-2 border-2 border-slate-300"
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="m-2 flex flex-col">
        <label className="">Email:</label>
        <input
          className="px-5 py-2 border-2 border-slate-300"
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="m-2 flex flex-col">
        <label className="">Message:</label>
        <textarea
         className="px-5 py-2 border-2 border-slate-300"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Enter message"
        ></textarea>
      </div>
      <button className="bg-black rounded-lg w-[100px] text-white py-1 ml-2 " type="submit">Submit</button>
    </form>
    </div>
  );
};

export default page;
