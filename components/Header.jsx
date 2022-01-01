import Image from "next/image";

const Header = () => {
    return (
        <header className="p-4 lg:p-12 flex justify-between absolute top-0 w-full">
            <Image
                src="/images/logo.svg"
                alt=""
                objectFit="contain"
                width={128}
                height={40}
            />

            <button className="bg-white text-neutral-dark-cyan px-6 font-open-sans font-bold rounded-full shadow-md text-sm">
                Try it Free
            </button>
        </header>
    );
};

export default Header;
