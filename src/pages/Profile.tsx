
import coverImage from '@/assets/profile/coverImage.png'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from '@/components/ui/button'
import { useEffect } from 'react';
import { HiMiniUsers } from "react-icons/hi2";
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentTab } from '@/slices/ProfileSlice'
import Videos from '@/components/core/Profile/Videos';
import Playlists from '@/components/core/Profile/Playlists';
import Tweets from '@/components/core/Profile/Tweets';
import Followings from '@/components/core/Profile/Followings';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        text: "Videos"
    },
    {
        text: "Playlists"
    },
    {
        text: "Tweets"
    },
    {
        text: "Following"
    },
]

const Profile = () => {

    const selfUser = true;

    const { currentTab } = useSelector((state: any) => state.profile)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(currentTab);

    }, [currentTab])

    const navigate = useNavigate()

    return (
        <section
            className="text-white relative"
        >
            <div>
                <div
                    className='h-[150px]'
                >
                    <div    
                        className='h-[220px] overflow-hidden'
                    >

                    <AspectRatio
                        ratio={16 / 9}
                    >
                        <img src={coverImage} alt=""
                            className='h-full object-fill'
                        />
                    </AspectRatio>
                    </div>
                </div>

                <div
                    className='p-[24px] mt-3'
                >
                    {/* owner Profile */}
                    <div
                        className='flex flex-col sm:flex-row gap-4 justify-between sm:items-center border-b pb-4'
                    >
                        <div
                            className='flex flex-col sm:flex-row sm:items-center gap-4 relative'
                        >
                            <div
                                className='w-[100px] sm:w-[180px] aspect-square  rounded-full border overflow-hidden relative left-0 bottom-0'
                            >
                                <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" alt='image'
                                    className='cover h-full w-full'
                                />
                            </div>

                            <div
                                className='flex flex-col gap-[0.1rem]'
                            >
                                <h2
                                    className='text-3xl font-[600]'
                                >
                                    User Name
                                </h2>
                                <h3
                                    className='text-lg font-normal leading-6'
                                >
                                    @username
                                </h3>
                                <div
                                    className='flex items-center gap-3 text-lg font-normal leading-6'
                                >
                                    <span>600k Subscribers</span>
                                    <span>220 Subscribed</span>
                                </div>
                            </div>

                        </div>
                        <div
                            className=''
                        >

                            {
                                selfUser ?
                                    <Button
                                        className='shadow-none'
                                        onClick={() => { navigate("/settings") }}
                                    >
                                        <FaPencilAlt />
                                        <span>Edit</span>
                                    </Button>
                                    :
                                    <Button
                                        className='shadow-none'
                                    >
                                        <HiMiniUsers />
                                        <span>Follow</span>
                                    </Button>
                            }
                        </div>
                    </div>
                    {/* owner Profile */}
                    {/* <div
                        className='flex gap-4 justify-between'
                    >
                        <div
                            className='flex gap-2 relative items-end'
                        >
                            <div
                                className='w-[160px] aspect-square  rounded-full border overflow-hidden absolute '
                            >
                                <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" alt='image'
                                    className='cover h-full w-full'
                                />
                            </div>

                        </div>
                        <div
                            className='flex-1 flex justify-between items-start ml-[165px]'
                        >
                            <div
                                className='flex flex-col gap-[0.1rem]'
                            >
                                <h2
                                    className='text-3xl font-[600]'
                                >
                                    User Name
                                </h2>
                                <h3
                                    className='text-lg font-normal leading-6'
                                >
                                    @username
                                </h3>
                                <div
                                    className='flex items-center gap-3 text-lg font-normal leading-6'
                                >
                                    <span>600k Subscribers</span>
                                    <span>220 Subscribed</span>
                                </div>
                            </div>
                            {
                                selfUser ?
                                    <Button
                                        className='shadow-none'
                                        onClick={() => { navigate("/settings") }}
                                    >
                                        <FaPencilAlt />
                                        <span>Edit</span>
                                    </Button>
                                    :
                                    <Button
                                        className='shadow-none'
                                    >
                                        <HiMiniUsers />
                                        <span>Follow</span>
                                    </Button>
                            }
                        </div>
                    </div> */}

                    {/* Tab Bar */}
                    <div
                        className='flex items-center gap-6 justify-between mt-8 border-b pb-3'
                    >
                        {
                            data.map((el, i) => (
                                <div key={i}
                                    className='w-full'
                                >
                                    {
                                        el.text.toUpperCase() === currentTab ?
                                            <div
                                                className='flex justify-center w-full p-3 bg-[#F0FDF9] text-rich-purple-400 text-[16px] font-[600] cursor-pointer'
                                            >
                                                <span>{el.text}</span>
                                            </div>

                                            :

                                            <div
                                                onClick={() => { dispatch(setCurrentTab(el.text.toUpperCase())) }}
                                                className='flex justify-center w-full p-3  text-[#667085] text-[16px] font-[600] cursor-pointer'
                                            >
                                                <span>{el.text}</span>
                                            </div>

                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div
                className='px-[24px] pb-3'
            >
                {
                    (function render() {
                        const val = currentTab;
                        switch (val) {
                            case 'VIDEOS':
                                return <Videos selfUser={selfUser} />
                            case 'PLAYLISTS':
                                return <Playlists />
                            case 'TWEETS':
                                return <Tweets selfUser={selfUser} />
                            case 'FOLLOWING':
                                return <Followings />
                        }
                    })()
                }
            </div>
        </section>
    )
}

export default Profile