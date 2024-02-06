import React from "react";
import up from "../assets/arrows/up.png";
import FaqCard from "../components/FaqCard";

const FAqs = [
  {
    Q: "What services does your agency offer?",
    A: <bold> &#8618; We specialize in video editing, graphic design, and content creation assistance to help businesses elevate their digital presence.</bold>,
  },
  {
    Q: "How can I trust the quality of your work?",
    A: <bold>&#8618; Our agency provides proof of our work through detailed case studies, testimonials from satisfied clients, and a portolio showcasing our projects.</bold>,
  },
  {
    Q: "Do you offer customizable packages?",
    A:  <bold>&#8618; Yes, we offer customizable packages tailored to meet the unique needs and budget of each client. Contact us to discuss your specific requirements</bold>,
  },
  {
    Q: "Can you provide examples of your past projects?",
    A: <bold>&#8618;Absolutely! You can explore our portfolio section to view examples of our past projects and see the quality of our work firsthand.</bold>,
  },
  {
    Q: "What is the process for working with your agency?",
    A: <bold>&#8618; Our process typically involves an initial consultation to understand your needs, followed by a collaborative planning phase and then exection of the project with regular updates and feedback sessions.</bold>,
  },
  {
    Q: "Do you have experience working with clients in my industry?",
    A: <bold>&#8618; Our agency has worked with clients across various industries, and we're adept at adapting our services to meet the unique needs of each client, regardless of their industry.</bold>,
  },
  {
    Q: "How long does it take to complete a project?",
    A: <bold> &#8618; The timeline for each project varies depending on its scope and complexity. We strive to deliver high-quality results efficiently and will provide you with a clear timeline during the initial consultation phase</bold>,
  },
  {
    Q: "Do you offer ongoing support after the project is completed?",
    A: <bold>&#8618; Yes, we offer ongoing support to ensure the continued success of your project. Whether you need updates, maintenance, or further assistance, we're here to help.</bold>,
  },
  {
    Q: "What sets your agency apart from others in the industry?",
    A: <bold>&#8618; Our agency is committed to delivering exceptional results through creativity, professionalism, and a client-centered approach. We prioritize customer satisfaction and strive to exceed expectations in every project we undertake</bold>,
  }, 
  {
    Q:"How can I get started with your agency?",
    A: <bold>&#8618; Getting started is easy! Simply reach out to us through our contact form or by email, and we'll schedule a consultation to discuss your project needs and how we can help you achieve your goals.</bold>,
  }

];

export default function Faq() {
  return (
    <div className="mt-[120px]">
      <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-8">
        FAQs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-0">
        {FAqs.map((e, i) => (
          <FaqCard question={e.Q} answer={e.A} />
        ))}
      </div>
    </div>
  );
}
