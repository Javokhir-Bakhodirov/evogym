import { HiOutlineAcademicCap } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import Card from "./card/Card";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/types";
import Container from "@/utils";
import BenefitImg from "@/assets/BenefitsPageGraphic.png";
import { Link } from "./button/Button";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const benefits: Array<BenefitType> = [
    {
        icon: <HiOutlineHome className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <HiOutlineUserGroup className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <HiOutlineAcademicCap className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
];

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section className=" bg-gray-20 py-10" id="benefits">
            <Container>
                <motion.div
                    onViewportEnter={() =>
                        setSelectedPage(SelectedPage.Benefits)
                    }>
                    <motion.div
                        className=" md:my-5 md:w-3/5"
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <h2 className=" text-2xl font-bold">
                            MORE THAN JUST GYM.
                        </h2>
                        <p className="my-5 text-sm font-semibold">
                            We provide world class fitness equipment, trainers
                            and classes to get you to your ultimate fitness
                            goals with ease. We provide true care into each and
                            every member.
                        </p>
                    </motion.div>
                    <motion.div
                        className="mt-5 items-center justify-between gap-8 md:flex"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={container}>
                        {benefits.map((benefit: BenefitType) => {
                            return (
                                <Card
                                    key={benefit.title}
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                    setSelectedPage={setSelectedPage}
                                />
                            );
                        })}
                    </motion.div>
                    <motion.div className="pt-[90px] md:flex-row-reverse flex-col flex items-center">
                        <div className="pb-[40px] w-full">
                            <img
                                src={BenefitImg}
                                className="w-full"
                                alt="Hot Girl"
                            />
                        </div>
                        <div>
                            <div className="">
                                <h2 className="text-3xl font-extrabold">
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">
                                        FIT
                                    </span>
                                </h2>
                            </div>
                            <motion.div
                                className="mb-12 md:w-4/5 "
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}>
                                <p className="font-semibold my-5">
                                    Nascetur aenean massa auctor tincidunt.
                                    Iaculis potenti amet egestas ultrices
                                    consectetur adipiscing ultricies enim.
                                    Pulvinar fames vitae vitae quis. Quis amet
                                    vulputate tincidunt at in nulla nec.
                                    Consequat sed facilisis dui sit egestas
                                    ultrices tellus. Ullamcorper arcu id pretium
                                    sapien proin integer nisl. Felis orci diam
                                    odio.
                                </p>
                                <p className=" font-semibold mb-5">
                                    Fringilla a sed at suspendisse ut enim
                                    volutpat. Rhoncus vel est tellus quam
                                    porttitor. Mauris velit euismod elementum
                                    arcu neque facilisi. Amet semper tortor
                                    facilisis metus nibh. Rhoncus sit enim
                                    mattis odio in risus nunc.
                                </p>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}>
                                <Link
                                    variant="btn"
                                    href={SelectedPage.ContactUs}
                                    className="font-bold ">
                                    Join Now
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Benefits;
