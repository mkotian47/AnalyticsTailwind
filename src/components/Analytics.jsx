import React from "react";
import Laptop from "../assests/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            mollitia tempore provident? Eaque optio quia eius placeat odio sed,
            recusandae beatae, rem unde enim ut.
          </p>
          <button className="bg-black hover:scale-105 duration-300 text-[#00df9a] w-[200px] rounded-md  font-medium py-3  my-3 md:mx-0 mx-auto">Get Started</button>

        </div>
      </div>
    </div>
  );
};

export default Analytics;
