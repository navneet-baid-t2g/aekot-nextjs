import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Service = ({ icon, name, text, path, isHome = false }) => {
  return (
    <article className="mx-auto w-fit">
      <div className={`flex flex-col items-center text-center px-6 py-8 group shadow-xl py-4 h-full`}>
        <div className={`flex flex-col justify-center items-center text-center gap-4 mx-auto ${isHome ? "w-full" : "w-5/6"}`}>
          <div className="flex justify-center items-center rounded-full bg-white shadow w-14 h-14 p-4">
            <img src={icon} alt="Icon" className="object-center" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            <Link href={path} className="hover:text-primary transition-colors">
              {name}
            </Link>
          </h2>
          <hr className="w-12 border-t-2 border-secondary rounded-full mb-3" />
          <p
            className="text-sm text-gray-600 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <Link
            href={path}
            className="inline-flex items-center text-primary font-semibold text-sm mt-auto hover:gap-1 transition-all"
          >
            Know More
            <FaArrowRightLong className="ml-2 text-[0.9rem]" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Service;
