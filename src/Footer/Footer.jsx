import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";


const Footer = () => {
    return (
        <div className="bg-gradient-to-r mt-4 text-white from-[#7342F9]  to-purple-600 ">
            <footer className="footer p-10 bg-gradient-to-r text-white from-[#7342F9]  to-purple-600 ">
                <aside>
                    <h1 className="text-2xl font-bold">Event Host</h1>
                    <h3 className=" text-sm font-light">IDEA Project, ICT Tower  (0th Floor),<br /> Plot:E-14x,Agargaon, Dhaka-1207 <br />02222-222222,       01111111111</h3>
                </aside>
                <nav>
                    <h6 className="link link-hover">Home</h6>
                    <a className="link link-hover">Events</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <h6 className="link link-hover">Event Dashboard</h6>
                    <a className="link link-hover">Terms & Conditon </a>
                    <a className="link link-hover">Privacy & Refund Policy</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <div className="flex gap-5">
                        <FaFacebook/>
                        <LuInstagram />

                        <BsLinkedin />
                        <IoLogoYoutube />


                    </div>
                </nav>
                <div>

                </div>

            </footer>

            <div className="p-10">
                <hr />
<div className="mt-4 flex justify-between items-center">
<div className="flex gap-4 ">
<h1>Pay With </h1>
<div className="flex gap-5">
<img className="h-8" src="https://i.ibb.co/w42pNNT/image-9.png" alt="" /><img className="h-8" src="https://i.ibb.co/803zXsf/Group-40.png" alt="" /><img className="h-8" src="https://i.ibb.co/GpdT26j/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-1.png" alt="" />

</div>
</div>
<div>
    <h1>@2023 TickHost & UVTR. All right reserved</h1>
</div>
</div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Footer;