
const Ticket = () => {
    return (
        <div className="mt-8">
           <div className="max-w-7xl h-[480px] mx-auto bg-gradient-to-t  rounded-xl from-[#F1F3FF] to-[#fffeff] relative flex justify-center items-end">
            <div className="absolute bottom-0">
                <div className="flex">
                    <div className="relative z-[0.5] top-14">
                        <div className="relative h-[220px] w-[150px]">
                            <img className="w-full h-full border-2 border-white bg-[#8C3494] pt-16#8C3494  rounded-tl-3xl" src="https://i.ibb.co/j4KPY7P/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-1.png" alt="" />
                            <div className="absolute bg-white w-16 rounded-full h-2 top-5 left-1/2 transform -translate-x-1/2 z-10">
                            </div>
                        </div>
                    </div>
                    <div className="relative z-[1]">
                        <img className="w-full h-full bg-[#ED0A80] border-2 border-white pt-24 pb-24 px-10 rounded-t-3xl" src="https://i.ibb.co/g9trj7V/image-9.png" alt="" />
                        <div className="absolute bg-white w-16 rounded-full h-2 top-5 left-1/2 transform -translate-x-1/2 z-10">
                        </div>
                    </div>
                    <div className="relative z-[0.5] top-14">
                        <div className="relative h-[220px] w-[150px]">
                            <img className="w-full h-full bg-gradient-to-t from-[#ED1C24] to-[#F7941D] border-2 pt-16 pxx-6 pb-8 border-white  rounded-tr-3xl" src="https://i.ibb.co/23Lk6Q3/Group-40.png" alt="" />
                            <div className="absolute bg-white w-16 rounded-full h-2 top-5 left-1/2 transform -translate-x-1/2 z-10">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <h1 className="text-center font-bold text-3xl">Simplify Ticketing</h1>
                <p className="text-[#8053FA] text-center text-base ">First Ever Unique QR Ticketing</p>
                <p className="text-[#8053FA] text-base mb-3">Platform For Event Registration & Booking</p>

                <button className="flex items-center ml-16 mb-3 text-white rounded-xl py-2 px-8 bg-gradient-to-r from-[#7342F9] to-[#a59fe7] ">
                    <img className="mr-3 w-6" src="https://i.ibb.co/GJqP0K2/fi-sr-shield-check.png" alt="" />
                    Secure Payment with
                </button>
            </div>
        </div> 
        </div>
    );
};

export default Ticket;