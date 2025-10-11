import Button from "./Button";

const CTA = ({ head, text, image }) => {
    return (
        <div

            className={`max-w-screen-xl cta mx-auto bg-cta-bg bg-contain`}
        >
            <div className="py-24 lg:py-32 flex flex-col lg:flex-row justify-between items-center">
                <img
                    loading="lazy"
                    src={image}
                    alt="Salesforce Logo"
                    className="salesforce_logo sm:w-[10rem] md:w-3/6 lg:w-2/6 mx-auto p-12 drop-shadow-2xl transition-transform duration-500"
                />
                <div className="flex flex-col w-5/6 md:w-4/6 lg:w-3/6 mx-auto space-y-6">
                    <header className="font-bold text-xl md:text-4xl 2xl:text-5xl leading-snug">
                        {head}
                    </header>
                    <p className="text-sm md:text-base">{text}</p>
                    <p className="font-semibold text-xl">
                        Get the{" "}
                        <span style={{ color: "#e52b50", fontSize: "25px" }}>
                            #AekotAdvantage
                        </span>{" "}
                        today.
                    </p>
                    <Button text="Schedule a Call" path="/contact" />
                </div>
            </div>
        </div>
    );
};

export default CTA;
