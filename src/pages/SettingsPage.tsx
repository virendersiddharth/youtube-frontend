import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import coverImage from "@/assets/profile/coverImage.png"
import { Button } from "@/components/ui/button"
import MyDetails from "@/components/core/Settings/MyDetails"
import { useDispatch, useSelector } from "react-redux"
import {setCurrentTab} from '@/slices/SettingSlice'
import ChangePassword from "@/components/core/Settings/ChangePassword"
import { useEffect } from "react"

const SettingsPage = () => {
    const {currentTab} = useSelector((state: any) => state.setting)
    const dispatch = useDispatch()
    // const {settingTab} = useSelector((state: any) => state.setting)
    useEffect(()=>{
        console.log(currentTab);
    })
    return (
        <div
            className="text-white w-full h-full overflow-x-hidden"
        >
            <div
                className="w-11/12 mx-auto py-10"
            >
                <h2 className="border-b text-3xl font-[600] pb-4">Settings</h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-12 mt-6 gap-4"
                >
                    <div
                        className="col-span-2 flex md:flex-col gap-4 md:gap-2 sticky"
                    >
                        <span
                            onClick={()=>{dispatch(setCurrentTab("MYDETAILS"))}}
                            className="cursor-pointer"
                        >My Details</span>
                        <span
                            onClick={()=>{dispatch(setCurrentTab("PASSWORD"))}}
                            className="cursor-pointer"
                        >Password</span>
                    </div>
                    <div
                        className="col-span-10"
                    >
                        {/* Profile and coverImage */}
                        <div>
                            <div
                                className='h-[150px] '
                            >
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="h-[220px]"
                                >
                                    <img src={coverImage} alt=""
                                        className='h-full object-fill'
                                    />
                                </AspectRatio>
                            </div>

                            <div
                                className='p-[24px] mt-2'
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
                                        </div>

                                    </div>
                                    <div
                                        className=''
                                    >
                                        
                                        {
                                                <Button
                                                    className='shadow-none'
                                                >
                                                    <span>View Profile</span>
                                                </Button>
                            
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* My Details Section */}
                        <div
                            className="p-[24px]"
                        >
                            {
                                (function render(){
                                    const val = currentTab;
                                    switch(val){
                                        case 'MYDETAILS':
                                            return <MyDetails />
                                        case 'PASSWORD':
                                            return <ChangePassword />
                                    }
                                })()
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SettingsPage