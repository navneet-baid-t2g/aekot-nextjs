import Link from "next/link";

const Service = ({ icon, name, text, path }) => {
  return (
    <Link href={path} className="block">
      <article className="mx-auto w-fit p-12 lg:p-6 cursor-pointer">
        <div className="relative w-full h-[23rem] group shadow-xl py-4">
          <div className="flex flex-col justify-center items-center text-center gap-4 w-5/6 mx-auto relative overflow-hidden">
            <div className="flex justify-center items-center rounded-full bg-white shadow w-14 h-14 p-4">
              <img src={icon} alt="Icon" className="object-center" />
            </div>
            <header className="font-bold text-md">{name}</header>
            <hr className="w-full border-2 border-secondary rounded-xl" />
            <p className="select-text text-sm">{text}</p>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center text-primary font-semibold">
            Know More →
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Service;
