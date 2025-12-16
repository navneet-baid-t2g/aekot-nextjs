import Button from "@/components/Button";
import Link from "next/link";

export const metadata = {
    title: "404 - Page Not Found | Aekot",
    description: "The page you are looking for could not be found. Return to the Aekot homepage.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <div className="max-w-screen-2xl flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center space-y-6">
                <h1 className="mt-44 text-xl font-semibold">Page Not Found</h1>
                <div>
                    <a
                        href="/"
                        className="mt-4 ghost-button inline-block w-full sm:w-44 md:w-48 py-2 font-semibold text-center text-light border-2 border-primary bg-primary rounded-lg transition-transform"
                        style={{ transition: "transform 0.2s ease-in-out" }}
                    >
                        Return Home{" "}
                        <i className="fa-solid fa-arrow-right-long text-xs"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
