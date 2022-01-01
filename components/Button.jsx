const Button = ({ onClick, children }) => {
    return (
        <button
            className="bg-primary-pink text-white w-full p-3 capitalize font-open-sans rounded-full"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
