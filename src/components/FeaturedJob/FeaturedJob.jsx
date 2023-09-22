import { GrLocation } from "react-icons/gr";
import { AiOutlineDollarCircle } from "react-icons/ai";

const FeaturedJob = ({ job }) => {
    console.log(job)
    const { logo, company_name, job_title, location, salary, remote_or_onsite, job_type } = job
    return (
        <div className="border p-6">
            <img src={logo} alt="" />
            <h4 className="text-2xl font-bold mt-7">{job_title}</h4>
            <p className="font-semibold my-2">{company_name}</p>
            <div className="my-3">
                <button className="border border-[#7E90FE] text-[#7E90FE] font-semiboldbold rounded-md px-4 py-2 mr-2">{remote_or_onsite}</button>
                <button className="border border-[#7E90FE] text-[#7E90FE] font-semiboldbold rounded-md px-4 py-2">{job_type}</button>
            </div>
            <div className="flex gap-4">
                <p className="flex items-center gap-1"><GrLocation></GrLocation> {location}</p>
                <p className=" flex items-center gap-1"><AiOutlineDollarCircle></AiOutlineDollarCircle>{salary}</p>
            </div>
            <div className="mt-6">
                <button className="bg-[#9873FF] text-white font-semibold px-4 py-2 rounded-lg">View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJob;