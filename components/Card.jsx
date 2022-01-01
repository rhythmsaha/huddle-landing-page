const Card = ({ img, heading, text, imageIsLast }) => {
    return (
        <div className="shadow-md p-10 lg:px-20 grid gap-8 lg:gap-24 lg:grid-cols-2 lg:place-items-center rounded-2xl border-t border-gray-100">
            <div className={`p-10 lg:p-20 ${imageIsLast ? "lg:order-2" : ""}`}>
                <img
                    className="object-contain w-full"
                    src={img}
                    alt={heading}
                />
            </div>

            <div className="text-center lg:text-left">
                <h2 className="text-lg lg:text-2xl font-poppins">{heading}</h2>
                <p className="text-xs lg:text-base mt-2 text-neutral-grayish-blue">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Card;
