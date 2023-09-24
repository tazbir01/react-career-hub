import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utitlity/LocalStorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect( ()=> {
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobsApplied,jobs, storedJobIds)
            setAppliedJobs(jobsApplied)
        }
    },[])
    return (
        <div className="mt-8">
            <h1 className="text-center text-3xl font-bold">Applied Jobs {appliedJobs.length}</h1>
        </div>
    );
};

export default AppliedJobs;