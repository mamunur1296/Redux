import React from "react";
import { useProduckt } from "../../Context/ProducktProvaider";

const About = () => {
  const { data } = useProduckt();
  console.log(data);
  return <div>This is about page</div>;
};

export default About;
