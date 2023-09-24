import myImage from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='flex'>
            <div className='flex-1'>
                <h1 className="text-7xl font-bold mt-36">One Step Closer To Your <span className="text-[#9873FF]">Dream Job</span></h1>
                <p className="my-7">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-[#9873FF] text-white font-semibold px-4 py-2 rounded-lg">Get Started</button>
            </div>
            <div className='flex-1 flex items-end'>
                <img className='' src={myImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;