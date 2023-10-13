import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Yusuf TEZCAN",
    customerTitle: "Founder & Head of Security",
    content:"Yusuf is working as a Senior Cloud Security Engineer and With more than 10 years of experience and He solves the challenges in cloud environments with Caligo and presents them to you.",
      
    image: testimonial1,
  },
  {
    customerName: "Yasin TEZCAN",
    customerTitle: "Head of Sales & Marketing",
    content:
      "Yasin has worked for many years in constant communication with customers and is now ready to spread the word about the security of cloud environments with Caligo. ",
    image: testimonial2,
  },
  {
    customerName: "Mücahit TEZCAN",
    customerTitle: "Head of Development",
    content:
      "Mücahit works as a Senior Software Developer in Caligo team and plays a big role in the development of the application. He successfully manages SDLC processes.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          About Caligo
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
        We started with one single goal, Secure Cloud

        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4 items-center"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="custom-content-text-white items-center">
                "{testimonial.content}"
              </div>
              <div className="flex rounded-xl xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" width="200px" style={{"border-radius":"5%"}} />
              </div>
              <div className="flex flex-col ml-4 items-center">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray items-center">
                    {testimonial.customerTitle}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
