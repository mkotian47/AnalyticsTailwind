import React from "react";
import { useState } from "react";
const Newsletter = () => {
  const [email,setEmail] = useState("");
  const handleChange=(event)=>{
    setEmail(event.target.value);
  };
  const handleClick=()=>{
    console.log(email);
  }
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want Tips & Tricks to Optimize your flow!
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input onChange={handleChange} className="p-3 flex w-full rounded-md text-black" value={email} name="email" type="email" placeholder="Enter Your email" />
                <button onClick={handleClick} className="bg-[#00df9a] text-black w-[200px] rounded-md px-3 py-3 ml-4 my-6">Notify Me</button>
            </div>
            <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
