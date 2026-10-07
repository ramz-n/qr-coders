import { Drill, Handshake, LockKeyhole } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const serviceitems = [
  {
    value: "item-1",
    trigger: "What services does QRCoders provide?",
    content:
      "We are a full-cycle custom software development company. We specialize in building bespoke software systems, modern corporate websites, and scalable applications tailored specifically to streamline corporate workflows and solve operational bottlenecks. We also offer integration solutions for various platforms and applications.",
  },
  {
    value: "item-2",
    trigger: "Do you only provide specific services?",
    content:
      "While our background includes advanced digital infrastructure, our expertise spans comprehensive software development. We build enterprise web portals, internal management tools, database solutions, and tailored e-commerce platforms across various industries.",
  },
  {
    value: "item-3",
    trigger: "What technology stacks do you use?",
    content:
      "We select modern, proven frameworks depending on your project requirements. We work extensively with technologies like React, Node.js, Python, C#, .NET Core and cloud architectures to build lightweight, fast, and completely proprietary code bases that you fully own.",
  },
];

const processitems = [
  {
    value: "item-4",
    trigger: "How do we get started with a new project?",
    content:
      "Every project begins with a discovery consultation. You can reach out through our contact page to outline your operational challenge. Our engineering team will evaluate your needs and provide a clear technical roadmap and execution timeline.",
  },
  {
    value: "item-5",
    trigger: "Will I own the source code of my software?",
    content:
      "Yes, 100%. Unlike SaaS products that lock you into monthly licensing, the custom software we architect belongs entirely to you. You retain full proprietary control, intellectual property rights, and custom domain branding.",
  },
  {
    value: "item-6",
    trigger: "Can you upgrade or integrate with our existing software?",
    content:
      "Absolutely. We specialize in custom API development and system integration. We can seamlessly connect your new platform to your existing infrastructure, CRM, databases, or third-party business software to prevent data silos.",
  },
];

const securityitems = [
  {
    value: "item-7",
    trigger: "How do you handle software security?",
    content:
      "Security is baked into our entire engineering process. We build systems following enterprise-grade protocols, including secure database encryption, hardened data schemas, and role-based access control (RBAC) to ensure your company data remains confidential.",
  },
  {
    value: "item-8",
    trigger: "What kind of support do you offer after launch?",
    content:
      "We offer ongoing post-launch maintenance packages. This includes server monitoring, routine security patches, technical troubleshooting, and version updates to ensure your software or website remains stable as your business scales.",
  },
  {
    value: "item-9",
    trigger: "Where will our software or website be hosted?",
    content:
      "We help deploy your application onto high-availability, optimized cloud server infrastructures (such as Azure or Google Cloud). This guarantees microsecond response speeds, localized edge caching, and maximum uptime for your users.",
  },
];

const FAQs = () => {
  return (
    <main className="mx-auto px-5 py-36 bg-[url('/bg-faq.svg')] bg-cover bg-center w-full">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          FAQs
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="grid gap-5">
        <div className="grid gap-2 w-full">
          <span className="flex gap-2 text-primary text-2xl items-center">
            <Drill /> Services & Capabilities
          </span>

          <Accordion defaultValue={[]} className="w-full rounded-lg border border-primary/50 p-3">
            {serviceitems.map((item) => (
              <AccordionItem className="" key={item.value} value={item.value}>
                <AccordionTrigger className="text-base">{item.trigger}</AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="grid gap-2 w-full">
          <span className="flex gap-2 text-primary text-2xl items-center">
            <Handshake /> Project Engagement & Process
          </span>
          <Accordion defaultValue={[]} className="w-full rounded-lg border border-primary/50 p-3">
            {processitems.map((item) => (
              <AccordionItem className="" key={item.value} value={item.value}>
                <AccordionTrigger className="text-base">{item.trigger}</AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="grid gap-2 w-full">
          <span className="flex gap-2 text-primary text-2xl items-center">
            <LockKeyhole /> Security, Maintenance & Hosting
          </span>
          <Accordion defaultValue={[]} className="w-full rounded-lg border border-primary/50 p-3">
            {securityitems.map((item) => (
              <AccordionItem className="" key={item.value} value={item.value}>
                <AccordionTrigger className="text-base">{item.trigger}</AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default FAQs;
