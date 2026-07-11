import { AppWindow, CloudCogIcon, Headset, MonitorCogIcon, MonitorSmartphoneIcon, NotebookPenIcon, PanelsTopLeft, Smartphone } from "lucide-react"

export const services = [
    {
        icon: AppWindow,
        title: "Custom Software Development",
        description: "We build secure, scalable, and customized software solutions tailored to your business requirements, helping you streamline operations and improve productivity."
    },
    {
        icon: PanelsTopLeft,
        title: "Website Design & Development",
        description: "Our team creates modern, responsive, and SEO-friendly websites that deliver exceptional user experiences and strengthen your online presence."
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "We develop high-performance Android and iOS applications with intuitive interfaces, ensuring seamless experiences across all devices."
    },
    {
        icon: MonitorSmartphoneIcon,
        title: "UI/UX Design",
        description: "Our creative designers craft visually appealing and user-centered designs that enhance customer engagement and improve usability."
    },
    {
        icon: CloudCogIcon,
        title: "Cloud Solutions",
        description: "We help businesses leverage cloud technologies for secure data storage, improved collaboration, and scalable infrastructure."
    },
    {
        icon: MonitorCogIcon,
        title: "Digital Marketing",
        description: "Our digital marketing services include SEO, social media marketing, content marketing, and online advertising to help your business reach the right audience and achieve measurable growth."
    },
    {
        icon: NotebookPenIcon,
        title: "IT Consulting",
        description: "We provide expert guidance to help organizations choose the right technologies, optimize workflows, and implement effective digital transformation strategies."
    },
    {
        icon: Headset,
        title: "Maintenance & Support",
        description: "Our commitment doesn't end after deployment. We offer ongoing maintenance, updates, security monitoring, and technical support to ensure your systems remain secure, reliable, and up to date."
    },
]

const Services = () => {
    return (
        <section id="services" className="my-20 py-20">
            <div className="fluid-container text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Services we Offer
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
                    Empowering Businesses with Innovative Technology Solutions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
                    {services.map((service) => (
                        <div className="h-full p-5 flex items-center flex-col border-primary/20 rounded-3xl border-2 hover:border-primary/40 transition-colors">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 ">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-3 font-serif text-xl font-medium">
                                {service.title}
                            </h3>
                            <p className="text-sm text-center text-muted-foreground">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Services