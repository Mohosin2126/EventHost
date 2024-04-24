

const Banner = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10 relative  min-h-[500px]">
    <div className="absolute inset-0">
        <img src="https://i.ibb.co/JrrScBv/Rectangle-8.png" alt="" className="w-full h-full " />
    </div>
    <div className="relative flex flex-col top-36 ml-20">
        <h1 className="mt-4 text-white text-4xl font-bold">CMA Fest</h1>
        <p className="mt-4 text-white text-lg">Make memories that will last a lifetime. See your favorite <br /> artists live at CMA Fest!</p>
        <div className="flex  gap-6 mt-4 ">
            <button className="flex items-center text-white rounded-xl py-3 px-4 bg-[#7342F9]">
                <img className="mr-3" src="https://i.ibb.co/N3mVwrT/Vector.png" alt="" />
                Get Ticket
            </button>
            <button className="border-2 border-white bg-transparent py-3 px-4 text-white rounded-xl">
                Explore All Events
            </button>
        </div>
    </div>
</div>
        </div>
    );
};

export default Banner;