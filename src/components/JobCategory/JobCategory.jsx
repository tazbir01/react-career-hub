import { useEffect, useState } from "react";
import Catagory from "../Catagory/Catagory";


const JobCategory = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('/public/data/categories.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="my-32">
            <h2 className="text-5xl font-bold text-center">Job Category List</h2>
            <p className="text-center mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-between mt-8">
                {
                    jobs.map(job => <Catagory key={job.id} job={job}></Catagory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;