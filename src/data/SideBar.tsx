import { IoMdHome } from "react-icons/io";
import { LuThumbsUp } from "react-icons/lu";
import { FaRegClock, FaRegQuestionCircle } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { BsFolder } from "react-icons/bs";
import { TbUserCheck } from "react-icons/tb";
import { PiGearBold } from "react-icons/pi";

export const SideBar = [
    {
        icon: <IoMdHome size={20}/>,
        text : "Home",
        path : "/"
    },
    {
        icon: <LuThumbsUp size={20}/>,
        text : "Liked Videos",
        path : "/liked-videos"
    },
    {
        icon: <FaRegClock size={20}/>,
        text : "History"
    },
    {
        icon: <FiVideo size={20}/>,
        text : "My Content"
    },
    {
        icon: <BsFolder size={20}/>,
        text : "Collection"
    },
    {
        icon: <TbUserCheck size={20}/>,
        text : "Subscribers"
    },
]

export const SideBarBottom = [
    {
        icon: <FaRegQuestionCircle size={20}/>,
        text : "Support"
    },
    {
        icon: <PiGearBold size={20}/>,
        text : "Settings",
        path : "/settings" 
    },
]