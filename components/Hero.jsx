import Button from "./Button";

const Hero = () => {
    return (
        <section className="pt-32 pb-10 px-6 lg:px-0 bg-hero-mobile sm:bg-hero-desktop bg-cover bg-top bg-neutral-pale-cyan">
            <div className="max-w-lg lg:max-w-[1440px] w-11/12 mx-auto lg:flex lg:items-center lg:justify-between lg:gap-8">
                <div className="lg:flex-1 text-center lg:text-left lg:w-10/12">
                    <h1 className="font-poppins text-2xl xl:text-4xl text-neutral-dark-cyan  lg:w-10/12">
                        Build The Community Your Fans Will Love
                    </h1>
                    <p className="font-open-sans mt-4 lg:text-lg lg:w-10/12 text-neutral-dark-cyan">
                        Huddle re-imagines the way we build communities. You
                        have a voice, but so does your audience. Create
                        connections with your users as you engage in genuine
                        discussion.
                    </p>

                    <div className="my-10 w-60 mx-auto lg:mx-0">
                        <Button onClick={() => 0}>Get started for free</Button>
                    </div>
                </div>

                <img
                    src="/images/illustration-mockups.svg"
                    alt="mockup"
                    className="object-contain lg:w-2/4"
                />
            </div>
        </section>
    );
};

export default Hero;
