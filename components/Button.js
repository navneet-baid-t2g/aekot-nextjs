import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; 
const Button = ({ text, path }) => {
    return (
        <Link
            href={path}
            className="ghost-button inline-block w-5/6 sm:w-44 md:w-48 lg:w-48 py-2 pl-2 font-semibold text-center text-light border-2 border-primary bg-primary hover:bg-primary/90 rounded-md transition-colors flex items-center justify-center gap-2"
        >
            {text} <FaArrowRight className="text-xs fa-arrow-right-long" />
        </Link>
    );
};

export default Button;
