const JobDescription = ({ job }) => {
    if (!job) return null;
    return (
        <div className="w-full max-h-[60vh] px-4 border-l flex flex-col justify-start overflow-y-auto">
            <div className="flex gap-2 items-start mb-4 flex-wrap">
                <h2 className="text-xl font-bold whitespace-nowrap">You are applying for:</h2>
                <p className="text-xl text-primary font-bold break-words">{job.name}</p>
            </div>
            <div className="space-y-1 text-sm mb-4  text-gray-700">
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Location:</strong> {job.location}</p>
            </div>

            <p className="text-gray-600 whitespace-pre-wrap break-words">{job.description}</p>


        </div>
    );
};

export default JobDescription;