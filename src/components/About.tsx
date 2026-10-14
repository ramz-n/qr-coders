import { TargetIcon, VisorIcon } from "@phosphor-icons/react";
import { Section, Split } from "./ui";

const About = () => {
    return (
        <Section id="about" tone="tint">
            <Split
                eyebrow="About us"
                title="A software company for businesses of every size"
            >
                <div className="space-y-4 text-base leading-relaxed text-zinc-600 mt-15">
                    <p>
                        Our developers, designers and technology specialists
                        turn ideas into working software, websites, mobile
                        applications and digital platforms, and keep them
                        running once they are live.
                    </p>
                    <p>We are based in Narayangarh, Chitwan.</p>
                </div>
                <dl className="mt-8 grid gap-6 border-t border-zinc-200 pt-6 sm:grid-cols-2">
                    <div>
                        <dt className="font-medium text-accent flex items-center gap-1">
                            <TargetIcon size={32} /> <span>Our mission</span>
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                            Help businesses adopt digital technology with
                            software that fits how they actually work.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-medium text-accent flex items-center gap-1">
                            <VisorIcon size={32} /> <span>Our vision</span>
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                            To become one of Nepal&rsquo;s most trusted IT
                            companies, known for quality, integrity and reliable
                            delivery.
                        </dd>
                    </div>
                </dl>
            </Split>
        </Section>
    );
};

export default About;
