import { AspectRatio } from "@/components/ui/aspect-ratio"
import { SideBar, SideBarBottom } from "@/data/SideBar"
import { Link } from "react-router-dom"
import ReactPlayer from 'react-player/youtube'

import { BiDislike, BiLike } from "react-icons/bi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SingleVideoPage = () => {
    return (
        <section
            className="h-full flex relative text-white"
        >

            {/* SideBar */}
            <div
                className="flex w-[80px] flex-col justify-between h-full text-white border-r border-white"
            >
                <div
                    className="px-[16px] pt-[32px] flex flex-col gap-1"
                >
                    {
                        SideBar.map((el, index) => (
                            <SideBarElement key={index} data={el} />
                        ))
                    }
                </div>
                <div className="px-[16px] pb-[32px] flex flex-col gap-1">
                    {
                        SideBarBottom.map((el, index) => (
                            <SideBarElement key={index} data={el} />
                        ))
                    }
                </div>
            </div>

            <div
                className="flex flex-1 p-[1rem] mb-4 overflow-x-hidden"
            >

                <div 
                    className="flex-1"
                >
                    {/* Video Code */}
                    <div
                        className="w-full"
                    >
                        <AspectRatio
                            ratio={16 / 9}
                            className="w-full"
                        >
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
                                className="w-full"
                            />
                        </AspectRatio>
                    </div>

                    {/* Video Details */}
                    <div
                        className="border rounded-xl p-6 flex flex-col gap-5"
                    >
                        <div
                            className="flex justify-between gap-5"
                        >
                            <div
                                className="flex-1 max-w-[500px]"
                            >
                                <h2>
                                    video Title
                                </h2>
                                <div
                                    className="flex items-center gap-3"
                                >
                                    <span>
                                        view
                                    </span>
                                    <span>
                                        like
                                    </span>
                                </div>
                            </div>
                            <div
                                className="flex items-center gap-2"
                            >
                                {/* Like Dislike Button */}
                                <div
                                    className="flex items-center gap-3 border rounded-[8px]"
                                >
                                    <div
                                        className="py-[10px] px-[10px] flex items-center gap-1"
                                    >
                                        <BiLike size={24}/>
                                        <span>2</span>
                                    </div>
                                    <div
                                        className="py-[10px] px-[10px] flex items-center gap-1"
                                    >
                                        <BiDislike size={24}/>
                                        <span>8</span>
                                    </div>
                                </div>

                                {/* Save to Playlist Button */}
                                <div
                                    className="flex items-center gap-2 p-[10px] px-[16px] border rounded-[8px] text-black bg-white"
                                >
                                    <MdOutlineCreateNewFolder size={22}/>
                                    <span>Save</span>
                                </div>
                            </div>
                        </div>

                        {/* Owner Details */}
                        <div
                            className="flex items-center gap-5 justify-between pb-4 border-b"
                        >
                            <div
                                className="flex items-center gap-3"
                            >
                                <div
                                    className="w-[50px] rounded-full overflow-hidden"
                                >
                                    <img src="" alt="image" />
                                </div>
                                <div
                                    className="flex flex-col gap-1"
                                >
                                    <span
                                        className="text-[16px] font-[600]"
                                    >
                                        Name
                                    </span>
                                    <span
                                        className="font-normal text-[14px]"
                                    >
                                        Follower
                                    </span>
                                </div>
                            </div>
                            
                            
                            <div className="text-white">
                                <Button variant={'default1'}>
                                    <HiMiniUsers/>
                                    <span>Follow</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Comment Part */}
                    <div
                        className="border rounded-xl p-6 flex flex-col gap-5 mt-3"
                    >
                        <span>
                            Total Comment
                        </span>
                        <Input placeholder="Add a Comment..." type="text"
                            className="rounded-md py-[20px] text-[16px] placeholder:text-gray-400" 
                        />
                    </div>
                </div>

                <div
                    className="flex-1 max-w-[450px]"
                    >
                    right
                </div>
            </div>
        </section>
    )
}

export default SingleVideoPage



const SideBarElement = ({ data = {} }: { data: any }) => {
    return (
        <Link to={data.path}
            className="flex items-center gap-2 py-2 px-3 border border-white overflow-x-hidden cursor-pointer rounded-lg justify-center"
        >
            <span>{data.icon}</span>
        </Link>
    )
}