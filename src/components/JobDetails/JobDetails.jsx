import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utitlity/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    // ekhane id hosse string === dile undefiend hoi tai == othoba id ke parse int kore nite hobe
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleApplyJob = () => {
        saveJobApplication(idInt)
    }

    return (
        <div className="max-w-5xl mx-auto mt-10">
                    <h2 className="text-center text-3xl font-bold mb-6">Job details</h2>
            <div className=" grid grid-cols-4 gap-3">
                <div className="col-span-3 space-y-3">
                    <p className="text-2xl font-semibold">{job.job_title}</p>
                    <p className="text-xl"><span className="font-bold">Job Description:</span> {job.job_description}</p>
                    <p className="text-xl"><span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <p className="text-xl"><span className="font-bold">Educational Requirements:</span> {job.educational_requirements}</p>
                    <p className="text-xl"><span className="font-bold">Experiences:</span> {job.experiences}</p>
                </div>
                <div className="col-span-1 space-y-3 p-5 bg-indigo-50 rounded-lg
            ">
                    <h3 className="text-2xl font-bold border-b-2">Job Details</h3>
                    <p><span className="font-bold">Salary:</span> {job.salary}</p>
                    <p><span className="font-bold">Job Title:</span> {job.job_title}</p>
                    <h3 className="text-2xl font-bold border-b-2">Contacy Information</h3>
                    <p><span className="font-bold">Phone:</span> {job.contact_information.phone}</p>
                    <p><span className="font-bold">Email:</span> {job.contact_information.email}</p>
                    <p><span className="font-bold">Address:</span> {job.contact_information.address}</p>
                    <div>
                        <button onClick={handleApplyJob} className="w-full btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;