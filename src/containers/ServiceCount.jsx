import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return (
    <div className="w-full py-6 lg:py-24 flex items-center justify-center flex-wrap gap-8">
       <ServiceCard count={"100+"} text={"Github"}/>
       <ServiceCard count={"20+"} text={"Projects"}/>
       <ServiceCard count={"60+"} text={"leetcode"}/>
       <ServiceCard count={"100+"} text={"replit"}/>
    </div>
  );
};

export default ServiceCount;
