
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";



const ServiceGridCard = ({ imageSrc, title, additionalInfo, alignRight }) => {
  const generateServicePath = (name) => {
    return `/services/${name.toLowerCase().replace(/ & | /g, "-").replace(/--+/g, "-")}`;
  };


  return (
    <a
      href={title === "Agentforce Implementation" ? "/services/agentforce-consulting-services" : generateServicePath(title)}
      className="block"
    >
      <div
        
        className={`relative w-full md:w-[750px] lg:w-[950px] border border-gray-300 rounded-lg overflow-hidden shadow-lg my-4 group transition-all duration-700 ease-in-out mb-6 ${
          alignRight ? "md:ml-auto" : "md:mr-auto"
        }`}
      >
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/3 h-48 md:h-auto flex items-center justify-center">
            <img
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-full max-w-[250px] md:max-w-full md:max-h-[200px] rounded-lg p-4"
            />
          </div>

          <div className="w-full md:w-2/3 p-6 flex flex-col justify-between bg-white group-hover:bg-opacity-50 text-center md:text-left">
            <div className="flex flex-col justify-center h-full px-4">
              <h2 className="text-xl font-bold mb-2 text-primary">{title}</h2>
              {additionalInfo && (
                <div className="mt-2">
                  <h3 className="text-md font-semibold mb-2">{additionalInfo.headline}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{additionalInfo.subheading}</p>
                  <a href={additionalInfo.link}>
                    <p className="text-sm ghost-button font-semibold text-primary mt-2 hover:underline items-center">
                      {additionalInfo.cta}{" "}

                      <div>{additionalInfo.linktext && <span className="flex gap-3 align-middle align-center">{additionalInfo.linktext} <MdArrowOutward /></span> }</div>
                    </p>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ServiceGridCard;
