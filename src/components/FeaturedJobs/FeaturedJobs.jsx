import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('/public/data/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2 className='text-5xl text-center font-bold'>Featured Jobs</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-4">
            {
                jobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
            }
            </div>
        </div>
    );
};

export default FeaturedJobs;