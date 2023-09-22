

const Catagory = ({job}) => {
    return (
        <div className="bg-indigo-50 p-10 rounded-lg">
            <img src={job.logo} alt="" />
            <h4 className="text-xl font-extrabold mt-7 mb-3">{job.category_name}</h4>
            <p>{job.availability}</p>
        </div>
    );
};

export default Catagory;