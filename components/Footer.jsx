import Link from "next/link";

import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLocationArrow,
    FaPhoneAlt,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-neutral-dark-cyan mt-56 font-open-sans ">
            <div className="max-w-7xl w-10/12 mx-auto">
                <div className="bg-white w-10/12 max-w-lg mx-auto -translate-y-1/2 shadow-lg border border-gray-100 px-5 py-16 rounded-xl flex flex-col items-center">
                    <h2 className="text-center font-poppins text-base md:text-lg lg:text-xl">
                        Ready To Build Your Community
                    </h2>

                    <button className="bg-primary-pink text-white font-open-sans px-8 py-2 rounded-full mt-4 text-xs md:text-base">
                        Get Started For Free
                    </button>
                </div>
                <div className="px-4 lg:px-8 my-8">
                    <img
                        src="/images/footerlogo.svg"
                        alt="footerLogo"
                        className="object-contain h-6"
                    />
                </div>
                <div className="px-4 lg:px-8 text-neutral-pale-cyan flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between ">
                    <div className="space-y-6 lg:max-w-xs">
                        <div className="flex gap-4">
                            <span className="mt-1">
                                <FaLocationArrow className="h-4 w-4" />
                            </span>

                            <p className="">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Quaerat quos sed, eos itaque
                                autem pariatur aspernatur cupiditate non vel!
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <span className="mt-1">
                                <FaPhoneAlt className="h-4 w-4" />
                            </span>

                            <p>+1-543-123-4567</p>
                        </div>

                        <div className="flex gap-4">
                            <span className="mt-1">
                                <FaEnvelope className="h-4 w-4" />
                            </span>

                            <p>example@fylo.com</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
                        <div className="flex flex-col items-start gap-4">
                            <Link href="#">About Us</Link>
                            <Link href="#">What We Do</Link>
                            <Link href="#">FAQ</Link>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <Link href="#">Career</Link>
                            <Link href="#">Blog</Link>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <span className="p-2 border rounded-full">
                            <FaFacebookF className="h-4 w-4" />
                        </span>

                        <span className="p-2 border rounded-full">
                            <FaTwitter className="h-4 w-4" />
                        </span>

                        <span className="p-2 border rounded-full">
                            <FaInstagram className="h-4 w-4" />
                        </span>
                    </div>
                </div>

                <div className="mt-6 p-4 lg:px-8 text-center text-xs lg:text-right">
                    <p className="text-neutral-pale-cyan ">
                        © Copyright 2018 Huddle. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
