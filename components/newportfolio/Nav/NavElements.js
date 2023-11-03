import React from "react";
import { FaCogs } from "react-icons/fa";
import { AiOutlineSetting, AiOutlineLock } from 'react-icons/ai';
import { IoIosLock } from 'react-icons/io';

const navelementsObject = [];

const NavElements = () => {
    const element = (index, isactive) => (
        <div key={`element${index}`} className={`mx-4 border-b border-[rgba(255,255,255,0.1)]`}>
            {isactive ? (
                <div className="font-normal h-14 text-lg flex items-end">
                    <div className="flex gap-2 items-end">
                        <AiOutlineSetting size={22} />
                        My Services
                        <div className="text-8 ml-0.5 relative">
                            <div className="absolute -bottom-[3px] tracking-[1.5px] opacity-70">
                                <span className="text-[9.5px]">({index}</span>/8)
                            </div>
                        </div>{" "}
                    </div>
                    <div></div>
                </div>
            ) : (
                <div key={`element${index}`} className="font-light items-center opacity-70 h-14 flex justify-between gap-2  hover:bg-primary">
                    <div className="flex gap-2 items-end">
                        <AiOutlineSetting size={22} className="" />
                        My Services
                        <div className="text-8 ml-0.5 relative">
                            <div className="absolute -bottom-[3px] tracking-[1.5px]">
                                <span className="text-[9.5px]">({index}</span>/8)
                            </div>
                        </div>
                    </div>
                    <div><AiOutlineLock size={20} /></div>
                </div>
            )}
            {isactive && <div className="h-[8%] w-11 mt-1 bg-red-600"></div>}
        </div>
    );
    return (
        <div className="flex flex-col tracking-wide text-base">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
                if (index === 0) {
                    return element(index + 1, true);
                } else return element(index + 1, false);
            })}
        </div>
    );
};

export default NavElements;
