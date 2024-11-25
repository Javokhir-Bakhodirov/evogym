import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Logo from "@/assets/Logo.png";
import { Button, Link } from "./button/Button";
import Container from "@/utils";
import { SelectedPage } from "@/types";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    return (
        <nav
            className={`fixed top-0 z-[9999999912121221] w-full transition duration-500  ${
                !isTopOfPage ? "bg-primary-100" : "bg-transparent"
            }`}>
            <Container>
                <div className="flex justify-between items-center gap-[35px]">
                    <div className="flex-shrink-0">
                        <a href="/">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                    <div className="hidden md:flex items-center gap-6 flex-grow">
                        <Link
                            variant="link"
                            href={SelectedPage.Home}
                            className="text-sm"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}>
                            Home
                        </Link>
                        <Link
                            variant="link"
                            href={SelectedPage.Benefits}
                            className="text-sm"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}>
                            Benefits
                        </Link>
                        <Link
                            variant="link"
                            href={SelectedPage.OurClasses}
                            className="text-sm"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}>
                            Our Classes
                        </Link>
                        <Link
                            variant="link"
                            href={SelectedPage.ContactUs}
                            className="text-sm"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}>
                            Contact Us
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                        <Link variant="link" href="signIn" className="text-sm">
                            Sign In
                        </Link>
                        <Button
                            variant="btn"
                            className="font-bold text-sm"
                            setSelectedPage={setSelectedPage}>
                            Become a Member
                        </Button>
                    </div>
                    <Button
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        variant="btn"
                        className="p-2 rounded-full flex md:hidden">
                        <AiOutlineMenu className="" />
                    </Button>
                </div>
            </Container>
            {/* {isMenuToggled && ( */}
            <div
                className={`md:hidden fixed top-0 right-0 z-40 h-full bg-primary-100 drop-shadow-xl py-[27px] px-[55px] transition-transform duration-300 transform  ${
                    isMenuToggled ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className="flex justify-end mb-[30px]">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <CgClose className="text-xl" />
                    </button>
                </div>
                <div className="flex flex-col gap-3 ">
                    <Link
                        variant="link"
                        href={SelectedPage.Home}
                        className="text-xl"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}>
                        Home
                    </Link>
                    <Link
                        variant="link"
                        href={SelectedPage.Benefits}
                        className="text-xl"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}>
                        Benefits
                    </Link>
                    <Link
                        variant="link"
                        href={SelectedPage.OurClasses}
                        className="text-xl"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}>
                        Our Classes
                    </Link>
                    <Link
                        variant="link"
                        href={SelectedPage.ContactUs}
                        className="text-xl"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}>
                        Contact Us
                    </Link>
                </div>
            </div>
            {/* )} */}
        </nav>
    );
};

export default Navbar;
