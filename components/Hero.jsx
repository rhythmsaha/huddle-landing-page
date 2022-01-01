import Button from "./Button";

const Hero = () => {
    return (
        <section className="pt-32 px-8 bg-hero-mobile sm:bg-hero-desktop bg-cover bg-center">
            <div>
                <h1 className="font-poppins">
                    Build The Community Your Fans Will Love
                </h1>
                <p className="font-open-sans">
                    Huddle re-imagines the way we build communities. You have a
                    voice, but so does your audience. Create connections with
                    your users as you engage in genuine discussion.
                </p>

                <Button onClick={() => 0}>Get started for free</Button>
            </div>

            <img src="/images/illustration-mockups.svg" alt="mockup" />
        </section>
    );
};

export default Hero;
