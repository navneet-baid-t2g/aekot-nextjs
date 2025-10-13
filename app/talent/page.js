import { MdAccessTime, MdTipsAndUpdates } from 'react-icons/md';
import { LuMonitor } from 'react-icons/lu';
import { Certifications, Experience, Skills, WorkExperience } from './sections';

// profile image
const ProfileImage = () => (
    <div className=" flex justify-center h-96">
        <img src={"/images/talent-images/USER-1.webp"} alt="profile_image" className="object-cover rounded-xl" />
    </div>
);

// name and role
const NameAndRole = () => (
    <div className="max-w-full">
        <h2 className="text-primary font-bold xs:text-3xl text-2xl md:text-3xl lg:text-4xl my-4">
            Anup Prakash
        </h2>
        <p className="text-lg font-medium my-4">
            Founder & CEO
        </p>
    </div>
);

// location
const Location = () => (
    <div className="grid grid-cols-2 xs:grid-cols-1  ">
        <div className="py-4">
            <h2>LOCATION</h2>
            <p className="font-semibold">Bengaluru, Karnataka, India.</p>
        </div>

        {/* <div className="border-2 border-secondary xs:hidden sm:hidden rounded-xl"></div> */}

        <div className="py-4">
            <h2>AEKOT MEMBER SINCE</h2>
            <p className="font-semibold">July 6th, 2020</p>
        </div>
    </div>
);

// summary
const Summary = () => (
    <div className="py-4">
        <p>
            Anup is a Salesforce-certified system and application architect with a successful 12-year track record working hands-on in all aspects of Salesforce implementations, including architecture, development, and enhancements.
            He is a Lightning developer who is experienced in creating solution designs and building advanced features using integrations, Apex triggers and classes, VF, and LWC.
            His primary industry domains are technology, media, telecommunications, real estate, and US government projects.
        </p>
    </div>
);

// portfolio
const Portfolio = () => (
    <div className="flex flex-row xs:flex-col justify-evenly">
        <div className="py-4 w-1/2 xs:w-full pr-4">
            <h2 className="font-bold mb-4 text-xl">Portfolio</h2>
            <div className="flex flex-col mb-4">
                <h2 className="text-primary">Aekot Consulting</h2>
                <p>Salesforce Sales Cloud, Salesforce Core, Command-line Interface (CLI), Apex...</p>
            </div>
            <div className='flex flex-col mb-4'>
                <h2 className='text-primary'>Aekot </h2>
                <p>Salesforce, Salesforce Marketing Cloud, WordPress</p>
            </div>
            <div className='flex flex-col mb-4'>
                <h2 className='text-primary'>Jacobs</h2>
                <p>Salesforce, HTML, JavaScript, CSS, Lightning Components</p>
            </div>
        </div>

        <div className="py-4 w-1/2 xs:w-full">
            <h2 className="font-bold mb-4 text-xl">Experience</h2>
            <div className="grid grid-cols-2 xs:grid-cols-1 text-xs">
                <p className='border-2 border-secondary rounded-xl mx-1 mb-2 text-center p-1 '>Salesforce Service Cloud - 12 years</p>
                <p className='border-2 border-secondary rounded-xl mx-1 mb-2 text-center p-1 '>Salesforce Sales Cloud - 12 years</p>
                <p className="border-2 border-secondary rounded-xl mx-1 mb-2 text-center p-1">Salesforce Apex - 12 years  </p>
                <p className='border-2 border-secondary rounded-xl mx-1 mb-2 text-center p-1 '>Salesforce Lightning - 12 years</p>
                <p className='border-2 border-secondary rounded-xl mx-1 mb-2 text-center p-1 '>Salesforce DX - 10 years</p>
                <p className='border-2 border-secondary rounded-xl mx-1 mb-2 text-center p-1 '> salesforce - 12 years</p>
            </div>
        </div>
    </div>
);

// availability , preferred environment and most amazing things
const Availability = () => (
    <div className="py-4 grid grid-rows-1 grid-cols-3 xs:grid-cols-1">
        <div className="bg-gray-200 m-1 lg:h-60 md:h-80 flex flex-col pl-4 pt-4">
            <MdAccessTime size={60} />
            <h2 className="font-semibold mt-3">Availability</h2>
            <p className="text-xs mt-3 pr-4 pb-2">Full-time</p>
        </div>
        <div className='bg-gray-200 m-1 lg:h-60 md:h-80 flex flex-col pl-4 pt-4'>
            <LuMonitor size={60} />
            <h2 className='font-semibold mt-3'>Preferred Environment</h2>
            <p className='text-xs mt-3 pr-4 pb-2'>Salesforce, Salesforce Lightning, Visual Studio Code (VS Code), Command-line Interface (CLI), GitHub, Jira, Slack, Lightning Web Components (LWC), Apex</p>
        </div>
        <div className='bg-gray-200 m-1 lg:h-60 md:h-80 flex flex-col pl-4 pt-4'>
            <MdTipsAndUpdates size={60} />
            <h2 className='font-semibold mt-3'>The most amazing...</h2>
            <p className='text-xs mt-3 pr-4 pb-2'>...thing I've implemented was a project for the best search engine company to set up their partner advantage portal.</p>
        </div>
        {/*... */}
    </div>
);




//  rendering all the components for the Talent section
const Talent = () => (
    <section className="lg:px-12 xs:px-6 sm:px-4 md:px-12 pt-32 grid grid-cols-1 md:grid-cols-[30%_70%] lg:grid-cols-[30%_70%] xl:grid-cols-[30%_70%] gap-4">
        <div className=" col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 justify-center flex">
            <ProfileImage />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <NameAndRole />
            <hr className="w-full border-1 border-grey rounded-xl" />
            <Location />
            <hr className="w-full border-1 border-grey rounded-xl" />
            <Summary />
            <hr className="w-full border-1 border-grey rounded-xl" />
            <Portfolio />
            <Availability />
            <hr className="w-full border-1 border-grey rounded-xl" />
            <WorkExperience />
            <hr className="w-full border-1 border-grey rounded-xl" />
            <Experience />
            <hr className="w-full border-1 border-grey rounded-xl" />
            <Certifications />
            <hr className="w-full border-1 border-grey rounded-xl" />
            <Skills />
        </div>
    </section>
);

export default Talent;
