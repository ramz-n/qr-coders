import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
    return (
        <main className="mx-auto px-5 py-36">
            <div className="mb-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Become a QRCoders
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
                    Explore our opportunities and find your perfect role.
                </h2>
            </div>
            <div className="grid gap-5">
                <Card className="w-full px-5 ">
                    <CardContent>
                        <Accordion defaultValue={[]}>
                            <AccordionItem key="item-1" value="item-1">
                                <AccordionTrigger className="text-base text-primary">
                                    Open Application
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 text-base">
                                    Don’t see a specific job opening that
                                    perfectly matches your expertise? We still
                                    want to hear from you! At QRCoders, we are
                                    constantly expanding our engineering,
                                    design, and operational talent pools. If you
                                    are passionate about solving complex
                                    business problems, building
                                    high-availability custom software, and
                                    engineering exceptional digital user
                                    experiences.
                                    <Link
                                        to="mailto:qrcoders.info@gmail.com"
                                        className="block mt-3 text-primary"
                                    >
                                        Submit your resume and portfolio to us
                                        today!
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card className="w-full px-5 ">
                    <CardContent>
                        <Accordion defaultValue={[]}>
                            <AccordionItem key="item-1" value="item-1">
                                <AccordionTrigger className="text-base text-primary">
                                    Senior Full-Stack Engineer (.NET focused)
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 text-base">
                                    <strong>Role Overview:</strong> Lead the
                                    architecture and end-to-end development of
                                    proprietary, client-facing web applications.
                                    You will turn complex operational
                                    bottlenecks into lightweight, clean, and
                                    completely customized software systems.
                                    <div className="mt-3">
                                        <strong>Responsibilities:</strong>
                                        <ul>
                                            <li>
                                                - Design and implement scalable
                                                web applications using .NET
                                                technologies
                                            </li>
                                            <li>
                                                - Collaborate with
                                                cross-functional teams to define
                                                project requirements and
                                                technical solutions
                                            </li>
                                            <li>
                                                - Conduct code reviews and
                                                provide guidance to junior
                                                developers
                                            </li>
                                            <li>
                                                - Optimize application
                                                performance and ensure high
                                                availability
                                            </li>
                                        </ul>

                                        <Button
                                            variant="outline"
                                            disabled
                                            className="block mt-3"
                                        >
                                            Closed
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card className="w-full px-5 ">
                    <CardContent>
                        <Accordion defaultValue={[]}>
                            <AccordionItem key="item-1" value="item-1">
                                <AccordionTrigger className="text-base text-primary">
                                    B2B Account Executive / IT Solutions
                                    Consultant
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 text-base">
                                    <strong>Role Overview:</strong> Identify and
                                    consult with businesses facing operational
                                    friction, positioning QRCoders' custom
                                    software and website capabilities as the
                                    definitive solution.
                                    <div className="mt-3">
                                        <strong>Responsibilities:</strong>
                                        <ul>
                                            <li>
                                                - Source and qualify inbound and
                                                outbound enterprise project
                                                opportunities.
                                            </li>
                                            <li>
                                                - Analyze business
                                                inefficiencies and pitch
                                                high-value, bespoke development
                                                proposals.
                                            </li>
                                            <li>
                                                - Oversee client relationships
                                                from initial consultation to
                                                contract signing.
                                            </li>
                                        </ul>

                                        <Button
                                            variant="outline"
                                            disabled
                                            className="block mt-3"
                                        >
                                            Closed
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card className="w-full px-5 ">
                    <CardContent>
                        <Accordion defaultValue={[]}>
                            <AccordionItem key="item-1" value="item-1">
                                <AccordionTrigger className="text-base text-primary">
                                    DevOps & Cloud Infrastructure Specialist
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 text-base">
                                    <strong>Role Overview:</strong> Own the
                                    deployment, optimization, and absolute
                                    security of our clients' custom software
                                    platforms and web portals.
                                    <div className="mt-3">
                                        <strong>Responsibilities:</strong>
                                        <ul>
                                            <li>
                                                - Architect high-availability
                                                hosting environments on AWS or
                                                Google Cloud.
                                            </li>
                                            <li>
                                                - Set up secure CI/CD pipelines,
                                                automated backups, and
                                                edge-caching configurations.
                                            </li>
                                            <li>
                                                - Monitor system performance to
                                                guarantee maximum uptime and
                                                microsecond response speeds.
                                            </li>
                                            <li>
                                                - Implement robust security
                                                measures to protect sensitive
                                                client data.
                                            </li>
                                        </ul>

                                        <Button
                                            variant="outline"
                                            disabled
                                            className="block mt-3"
                                        >
                                            Closed
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};

export default Careers;
