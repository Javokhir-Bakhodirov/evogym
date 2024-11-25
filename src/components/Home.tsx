import { SelectedPage } from "@/types";
import Container from "@/utils";

import HomeImg from "@/assets/HomePageText.png";
import HomeGrath from "@/assets/HomePageGraphic.png";
import sponser1 from "@/assets/SponsorRedBull.png";
import sponser2 from "@/assets/SponsorForbes.png";
import sponser3 from "@/assets/SponsorFortune.png";

import { Link, linkStyles } from "./button/Button";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    return (
        <motion.section
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            id="home"
            className="pt-[70px] gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            <Container>
                <motion.div className="flex flex-col md:flex-row items-center">
                    <div className=" md:ml-[30px] flex flex-col gap-6 items-self-end mt-[100px] md:w-3/5">
                        <motion.div
                            className="md:-mt-20  "
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            <div className="relative">
                                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-none md:before:content-evolveText">
                                    <img
                                        src={HomeImg}
                                        className="lg:w-3/5 relative z-[112121212]"
                                        alt="EVOGYM"
                                    />
                                </div>
                            </div>
                            <p className=" text-sm mt-4 min-sm:text-[11px] font-bold lg:w-4/5">
                                {" "}
                                Unrivaled Gym. Unparalleled Training Fitness
                                Classes. World Class Studios to get the Body
                                Shapes That you Dream of.. Get Your Dream Body
                                Now.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className=" flex gap-6 items-center">
                            <button
                                className={twMerge(
                                    linkStyles({ variant: "btn" }),
                                    "py-1 font-bold"
                                )}>
                                Join Us
                            </button>
                            <Link
                                variant="link"
                                href="contactUs"
                                onClick={() =>
                                    setSelectedPage(SelectedPage.ContactUs)
                                }
                                className="underline text-primary-500">
                                Learn More
                            </Link>
                        </motion.div>
                    </div>
                    <div>
                        <img
                            src={HomeGrath}
                            className="relative z-[123123]"
                            alt=""
                        />
                    </div>
                </motion.div>
            </Container>
            <div className="bg-primary-100 w-full hidden md:flex py-6">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 items-center">
                        <img
                            src={sponser1}
                            alt="Sponsor 1"
                            className=" mx-auto transform transition-transform duration-300 hover:scale-110"
                        />
                        <img
                            src={sponser2}
                            alt="Sponsor 2"
                            className=" mx-auto transform transition-transform duration-300 hover:scale-110"
                        />
                        <img
                            src={sponser3}
                            alt="Sponsor 3"
                            className=" mx-auto transform transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                </Container>
            </div>
        </motion.section>
    );
};

export default Home;
