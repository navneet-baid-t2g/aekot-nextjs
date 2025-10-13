const WhyUsCard = ({ img, name, para }) => {
    return (
        <article
            className={`flex flex-col items-center text-center gap-4 p-4 bg-white rounded-lg shadow-lg transform transition duration-300`}
        >
            <img
                src={img}
                alt={name}
                className="w-full rounded-lg shadow-md object-cover h-40"
            />
            <header className="font-bold text-lg text-gray-800">{name}</header>
            <hr className="w-1/6 border-2 border-secondary rounded-full" />
            <p className="text-sm text-gray-600 text-justify">{para}</p>
        </article>
    );
};

export default WhyUsCard;