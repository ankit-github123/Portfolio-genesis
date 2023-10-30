"use client"
import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { AppContext } from "@context/AppContext";
// import * as Icons from "react-icons/fa6";

const IconSearch = () => {
    const { portfolio } = useContext(AppContext);
    console.log(portfolio, 'portfolio')
    const [searchTerm, setSearchTerm] = useState("s");
    const [select, setSelect] = useState("");
    const allIcons = { ...IoIcons, ...FaIcons, ...AiIcons };
    const filteredIcons = Object.keys(allIcons)
        .filter((iconName) =>
            iconName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((iconName) => {
            const Icon = allIcons[iconName];
            console.log(iconName, 'iconName',)
            return (
                <div key={iconName} onClick={() => setSelect(iconName)} className={`icon_container cursor-pointer bg-secondary w-24 h-[5.5rem] flex flex-col justify-center m-1 border  rounded-md ${iconName === select ? 'border-red-600' : 'border-[rgba(255,255,255,0.1)]'}`}>
                    <div className="flex justify-center"><Icon key={iconName} size={35} color={iconName === select && 'red'} /></div>
                    <div className="text-[9px] font-medium opacity-60 mt-2 flex justify-center mx-1.5 break-all leading-3">{iconName}</div>
                </div>
            )
        })

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <div className="w-3/4 my-4 mx-auto">
                <input
                    type="text"
                    placeholder="Search icons..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="bg-secondary w-full p-4 rounded-md border border-[rgba(255,255,255,0.15)]"
                />
            </div>
            <div className="flex flex-wrap justify-center">
                {searchTerm !== "" && <IconContext.Provider value={{ color: "darkgrey" }}>
                    {filteredIcons}
                </IconContext.Provider>}
            </div>
        </div>
    );
};

export default IconSearch;
