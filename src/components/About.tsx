import { TargetIcon, VisorIcon } from "@phosphor-icons/react";
import { Section, Split } from "./ui";

const About = () => {
    return (
        <Section id="about" tone="tint">
            <Split
                eyebrow="About us"
                title="A software company for businesses of every size"
            >
                <div className="space-y-4 text-base leading-relaxed text-zinc-600 md:mt-15">
                    <p>
                        At QRCoders, we engineer high-impact software solutions
                        tailored for businesses of all sizes, helping them scale
                        seamlessly in a fast-evolving digital landscape. Based
                        in Narayangarh, Chitwan, we bridge the gap between
                        complex engineering and elegant, user-centric design to
                        drive real business growth.
                    </p>
                    <p>
                        We believe that great software shouldn't just function,
                        it should innovate.
                    </p>
                </div>
                <dl className="mt-8 grid gap-6 border-t border-zinc-200 pt-6 sm:grid-cols-2">
                    <div>
                        <dt className="font-medium text-accent flex items-center gap-1">
                            <TargetIcon size={32} alt="our mission" />{" "}
                            <span>Our mission</span>
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                            Empower businesses with scalable, high-performance
                            software that yield results. We are dedicated to
                            delivering world-class engineering solutions that
                            give our cients a competitive edge.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-medium text-accent flex items-center gap-1">
                            <VisorIcon size={32} alt="our vision" />{" "}
                            <span>Our vision</span>
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                            Our primary vision is to become the premier software
                            development partner for businesses of all sizes
                            looking to modernize their infrastructure.
                        </dd>
                    </div>
                </dl>
            </Split>
        </Section>
    );
};

export default About;
