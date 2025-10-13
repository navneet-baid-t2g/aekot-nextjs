"use client";
import { useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';
// work experience
const WorkExperience = () => {
    const [showAccordion, setShowAccordion] = useState(true);

    return (
        <div className='py-4'>
            <div
                className="w-full flex justify-between items-center cursor-pointer"
                onClick={() => setShowAccordion(!showAccordion)}
            >
                <span className="dropdown-button font-bold text-xl">Work Experience</span>
                <FaChevronDown className={`transition-transform ${showAccordion ? 'rotate-180' : ''}`} />
            </div>
            {showAccordion && (
                <div className="p-4">
                    <div className="p-5">
                        <div className="mb-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-primary">Architect</h3>
                                <p className="text-gray-500">2020 - PRESENT</p>
                            </div>
                            <p className="text-gray-900">Aekot Consulting</p>
                            <ul className="list-disc list-inside mt-2 text-gray-700 text-sm space-y-2">
                                <li>Managed the Salesforce project implementation, customer relationships, Salesforce implementation, and the firm&apos;s growth as a whole.</li>
                                <li>Designed the architecture and solution and then developed solutions that created an impact on customers&apos; productivity.</li>
                                <li>Oversaw the project deliveries, which were channeled through teams.</li>
                                <li>Built custom and reusable Lightning web components which could be bundled and made available for public usage.</li>
                                <li>Worked on packaged development to make Salesforce applications ready for AppExchange.</li>
                            </ul>
                            <p className="mt-2 text-gray-500 text-xs"><strong>Technologies:</strong> Salesforce Sales Cloud, Salesforce, Command-line Interface (CLI), Apex, Salesforce Lightning, Lightning Components, Integration, Salesforce SOAP API, Amazon S3 (AWS S3), Automation, Certified Salesforce Administrator, Automated Data Flows, Orchestration, Salesforce Community Cloud Certification, Health, Salesforce Certified Platform App Builder</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-primary">Salesforce Expert</h3>
                                <p className="text-gray-500">2023 - 2024</p>
                            </div>
                            <p className="text-gray-900">Aekot</p>
                            <ul className="list-disc list-inside mt-2 text-gray-700 text-sm space-y-2">
                                <li>Customized the digital experience and helped build the website from WordPress to Salesforce, leveraging CMS.</li>
                                <li>Helped with internal Salesforce set up and configuration for internal users.</li>
                                <li>Allowed to integrate with legacy external system leveraging external objects, bridging through OData, and integrating with Marketing Cloud.</li>
                            </ul>
                            <p className="mt-2 text-gray-500 text-xs"><strong>Technologies:</strong> Salesforce, Salesforce Marketing Cloud, WordPress</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// experience
const Experience = () => {
    const [showAccordion, setShowAccordion] = useState(true);

    return (
        <div className='py-4'>
            <div
                className="w-full flex justify-between items-center cursor-pointer"
                onClick={() => setShowAccordion(!showAccordion)}
            >
                <span className="dropdown-button font-bold text-xl">Experience</span>
                <FaChevronDown className={`transition-transform ${showAccordion ? 'rotate-180' : ''}`} />
            </div>
            {showAccordion && (
                <div className="p-4">
                    <div className="p-5">
                        <div className="mb-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">Architect</h3>
                                <p className="text-gray-500">2020 - PRESENT</p>
                            </div>
                            <p className="text-gray-600">Aekot Consulting</p>
                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Managed the Salesforce project implementation, customer relationships, Salesforce implementation, and the firm&apos;s growth as a whole.</li>
                                <li>Designed the architecture and solution and then developed solutions that created an impact on customers&apos; productivity.</li>
                                <li>Oversaw the project deliveries, which were channeled through teams.</li>
                                <li>Built custom and reusable Lightning web components which could be bundled and made available for public usage.</li>
                                <li>Worked on packaged development to make Salesforce applications ready for AppExchange.</li>
                            </ul>
                            <p className="mt-2 text-gray-500"><strong>Technologies:</strong> Salesforce Sales Cloud, Salesforce, Command-line Interface (CLI), Apex, Salesforce Lightning, Lightning Components, Integration, Salesforce SOAP API, Amazon S3 (AWS S3), Automation, Certified Salesforce Administrator, Automated Data Flows, Orchestration, Salesforce Community Cloud Certification, Health, Salesforce Certified Platform App Builder</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">Salesforce Expert</h3>
                                <p className="text-gray-500">2023 - 2024</p>
                            </div>
                            <p className="text-gray-600">Aekot</p>
                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Customized the digital experience and helped build the website from WordPress to Salesforce, leveraging CMS.</li>
                                <li>Helped with internal Salesforce set up and configuration for internal users.</li>
                                <li>Allowed to integrate with legacy external system leveraging external objects, bridging through OData, and integrating with Marketing Cloud.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// certifications
const Certifications = () => {
    const [showAccordion, setShowAccordion] = useState(true);

    return (
        <div className='py-4'>
            <div
                className="w-full flex justify-between items-center cursor-pointer"
                onClick={() => setShowAccordion(!showAccordion)}
            >
                <span className="dropdown-button font-bold text-xl">Certifications</span>
                <FaChevronDown className={`transition-transform ${showAccordion ? 'rotate-180' : ''}`} />
            </div>
            {showAccordion && (
                <div className="p-4">
                    <div className="p-5">
                        <div className="mb-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl ">Salesforce Certified Experience Cloud Consultant</h3>
                                <p className="text-gray-500">January 2023 - PRESENT</p>
                            </div>
                            <p className="text-primary">Salesforce</p>
                        </div>

                        <div className='mb-8'>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl ">Salesforce Certified Service Cloud Consultant</h3>
                                <p className="text-gray-500">December 2022 - PRESENT</p>
                            </div>
                            <p className="text-primary ">Salesforce</p>
                        </div>

                        <div className='mb-8'>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl ">Salesforce Certified Sales Cloud Consultant</h3>
                                <p className="text-gray-500">May 2020 - PRESENT</p>
                            </div>
                            <p className="text-primary">Salesforce</p>
                        </div>

                        <div className='mb-8'>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl ">Salesforce Certified Application Architect</h3>
                                <p className="text-gray-500">April 2019 - PRESENT</p>
                            </div>
                            <p className="text-primary">Salesforce</p>
                        </div>

                        <div className='mb-8'>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl ">Salesforce Certified Data Architecture and Management Designer</h3>
                                <p className="text-gray-500">April 2019 - PRESENT</p>
                            </div>
                            <p className="text-primary">Salesforce</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// skills
const Skills = () => {
    const [showAccordion, setShowAccordion] = useState(true);

    return (
        <div className='py-4'>
            <div
                className="w-full flex justify-between items-center cursor-pointer"
                role="button"
                onClick={() => setShowAccordion(!showAccordion)}
            >
                <span className="dropdown-button font-bold text-xl">Skills</span>
                <FaChevronDown className={`transition-transform ${showAccordion ? 'rotate-180' : ''}`} />
            </div>

            {showAccordion && (
                <div className="p-4">
                    <div className="py-4 pr-4">
                        <div className="flex flex-col mb-4">
                            <h2 className="text-primary">Libraries/APIs</h2>
                            <p>Salesforce REST API, Salesforce API, REST APIs, Salesforce SOAP API</p>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <h2 className='text-primary'>Tools </h2>
                            <p>Salesforce Sales Cloud, Salesforce DX, Batch Apex, GitHub, Slack, Jira, Salesforce Marketing Cloud</p>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <h2 className='text-primary'>Frameworks</h2>
                            <p>Lightning Components, OAuth 2, Ruby on Rails (RoR)</p>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <h2 className='text-primary'>Languages</h2>
                            <p>Apex, APEX Code, Java, HTML, JavaScript, CSS, SOQL</p>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <h2 className='text-primary'>Paradigms</h2>
                            <p>Automation, DevOps, REST, Test-driven Development (TDD), Agile Project Management</p>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <h2 className='text-primary'>Platforms</h2>
                            <p>Salesforce, MS-DOS, Linux, Windows, Visual Studio Code (VS Code), WordPress, Salesforce SOQL/SOSL, Apache Kafka</p>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <h2 className='text-primary'>Storage</h2>
                            <p>JSON, Amazon S3 (AWS S3)</p>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <h2 className='text-primary'>Other</h2>
                            <p>Salesforce Apex, Salesforce Service Cloud, Salesforce Lightning, Apex Triggers, Command-line Interface (CLI), Integration, Salesforce Community, Lightning Web Components (LWC), Certified Salesforce Administrator, Automated Data Flows, Orchestration, Salesforce Community Cloud Certification, Salesforce Certified Platform App Builder, SOAP, Health, Queueable Apex, Pub/Sub</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { WorkExperience, Experience, Certifications, Skills };