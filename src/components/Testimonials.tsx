import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonialData = [
  {
    name: "Raj Sharma",
    occupation: "Business Owner",
    title: "Outstanding Service and Professionalism",
    description:
      "The team delivered our website exactly as we envisioned. They were responsive, professional, and completed the project on time.",
  },
  {
    name: "Anita Koirala",
    occupation: "Reliable Technology Partner",
    title: "Outstanding Service and Professionalism",
    description:
      "We partnered with them for a custom management system, and the results exceeded our expectations.",
  },
  {
    name: "Suman Thapa",
    occupation: "Startup Founder",
    title: "High-Quality Web Development",
    description:
      "They transformed our ideas into a beautiful, fast, and user-friendly website.",
  },
  {
    name: "Bikash Gurung",
    occupation: "CEO",
    title: "Highly Recommended",
    description:
      "From planning to deployment, every step was handled professionally.",
  },
];

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section id="testimony" className="mx-auto my-16 max-w-7xl px-6">
      <h2 className="text-center text-4xl font-bold text-primary">
        Testimonials
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-gray-400">
        We value the trust our clients place in us and are committed to
        delivering exceptional digital solutions.
      </p>

      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {testimonialData.map((item) => (
            <article
              key={item.name}
              className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border-primary/50 border-solid border-2   p-6 shadow-lg transition duration-300">
                <div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        fill="#FF5FCF"
                        color="#FF5FCF"
                      />
                    ))}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-4">
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <span className="text-sm text-primary">
                    {item.occupation}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;