import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    // eivabe show all button dekhano uchit na
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('/public/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl text-center font-bold'>Featured Jobs</h2>
            <p className='text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
                {
                    jobs.slice(0,dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'mt-7 flex justify-center'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;