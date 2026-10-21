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
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section id="testimony" className="mx-auto my-20 py-10 text-center">
      <p className="eyebrow text-sm font-semibold tracking-widest text-primary">
        Testimonials
      </p>

      <h2 className="h-section mt-3">
        We value the trust our clients place in us and are committed to
        delivering exceptional digital solutions.
      </h2>

      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {testimonialData.map((item) => (
            <article
              key={item.name}
              className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="pl-5 flex rounded-2xl h-full flex-col justify-between p-6 bg-white transition duration-300 hover:border-accent hover:border-[1px]">
                <div className="relative">
                  <img
                    src="/quote.svg"
                    className="absolute top-0 left-0 pointer-events-none"
                    alt="quote"
                  />

                  <div className="relative z-10">
                    <h3 className="mt-5 text-lg font-extrabold">
                      {item.title}
                    </h3>

                    <blockquote className="text-base leading-relaxed text-zinc-600 mt-5">
                      &ldquo;{item.description}&rdquo;
                    </blockquote>
                  </div>
                </div>

                <div className="mt-8 border-t border-zinc-300 pt-4 flex gap-3">
                  <div className="bg-accent-strong rounded-full h-12 w-12 text-white text-xl flex items-center justify-center">
                    {item.name.split(" ")[0].charAt(0)}
                    {item.name.split(" ")[1].charAt(0)}
                  </div>
                  <div className="items-start flex flex-col">
                    <h4 className="font-medium text-zinc-900">{item.name}</h4>
                    <span className="text-zinc-500">{item.occupation}</span>
                  </div>
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
