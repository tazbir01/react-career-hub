

const FeaturedJob = ({job}) => {
    console.log(job)
    const {logo, company_name, job_title, location, salary} = job
    return (
        <div className="border">
            <img src={logo} alt="" />
            <h4>{job_title}</h4>
            <p>{company_name}</p>
            <p>{location}</p>
            <p>{salary}</p>
        </div>
    );
};

export default FeaturedJob;