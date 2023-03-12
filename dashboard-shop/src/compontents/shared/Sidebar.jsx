import React from "react";
import { RiHome6Line, RiPercentLine, RiPieChart2Line, RiMailLine, RiNotification2Line, RiSettings2Line, RiLogoutBoxLine } from 'react-icons/ri';

const Sidebar = (props) => {

    const { showMenu } = props;


    return (
        <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full p-4 flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
            <div>
                <ul className='pl-3 fixed'>
                    <li>
                        <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
                    </li>

                    <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
                        <a href="#" className='bg-[#d78075] justify-center p-4 block rounded-xl text-white'>
                            <RiHome6Line className='text-2xl' /></a>
                    </li>

                    <li className=' hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group'>
                        <a href="#" className='group-hover:bg-[#d78075] justify-center p-4 block rounded-xl text-[#d78075] group-hover:text-white transition-colors'>
                            <RiPercentLine className='text-2xl' /></a>
                    </li>

                    <li className=' hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group'>
                        <a href="#" className='group-hover:bg-[#d78075] justify-center p-4 block rounded-xl text-[#d78075] group-hover:text-white transition-colors'>
                            <RiPieChart2Line className='text-2xl' /></a>
                    </li>

                    <li className=' hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group'>
                        <a href="#" className='group-hover:bg-[#d78075] justify-center p-4 block rounded-xl text-[#d78075] group-hover:text-white transition-colors'>
                            <RiMailLine className='text-2xl' /></a>
                    </li>

                    <li className=' hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group'>
                        <a href="#" className='group-hover:bg-[#d78075] justify-center p-4 block rounded-xl text-[#d78075] group-hover:text-white transition-colors'>
                            <RiNotification2Line className='text-2xl' /></a>
                    </li>

                    <li className=' hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group'>
                        <a href="#" className='group-hover:bg-[#d78075] justify-center p-4 block rounded-xl text-[#d78075] group-hover:text-white transition-colors'>
                            <RiSettings2Line className='text-2xl' /></a>
                    </li>

                </ul>
            </div>
            <div className="top-0">
                <ul className="pl-3 flex">
                    <li className=' hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group'>
                        <a href="#" className='group-hover:bg-[#d78075] justify-center p-4 block rounded-xl text-[#d78075] group-hover:text-white transition-colors'>
                            <RiLogoutBoxLine className='text-2xl' /></a>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Sidebar;