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
                    <Button text="Return Home" path="/" />
                </div>
            </div>
        </div>
    );
}
