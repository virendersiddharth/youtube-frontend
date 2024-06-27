import { Button } from "@/components/ui/button"
import { IoIosAdd } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import VideoUploaderModal from "@/components/core/Profile/UploadVideo/VideoUploaderModal";
import { useDispatch, useSelector } from "react-redux";
import { setVideoUploadModal } from "@/slices/ProfileSlice";

const DashboardPage = () => {

    const {videoUploadModal} = useSelector((state: any)=>state.profile)
    const dispatch = useDispatch()

    return (
        <div
            className="text-white relative "
        >

            <div
                className="w-11/12 mx-auto py-6 flex flex-col gap-8"
            >
                {/* Top Row */}
                <div
                    className="flex items-start justify-between gap-5"
                >
                    <div>
                        <h2
                            className="text-3xl font-[600]"
                        >
                            Welcome back, Olivia
                        </h2>
                        <p
                            className="text-[1rem] font-normal"
                        >
                            Track, manage and forecast your customers and orders.
                        </p>
                    </div>
                    <Button
                        className="shadow-none text-[1rem] gap-0"
                        onClick={()=>{dispatch(setVideoUploadModal(true))}}
                    >
                        <IoIosAdd size={26} />
                        <span>Upload Video</span>
                    </Button>
                </div>

                {/* Center Row */}
                <div
                    className="grid grid-cols-3 gap-6"
                >
                    {
                        [0, 1, 2].map((i) => (
                            <div key={i}
                                className="border p-6 flex flex-col gap-4"
                            >
                                <div
                                    className="p-3 bg-rich-purple-100 w-fit rounded-full"
                                >
                                    <FaRegEye size={20} className="text-rich-purple-700" />
                                </div>
                                <div
                                    className="flex flex-col gap-1"
                                >
                                    <span className="text-sm">Total view</span>
                                    <span className="text-4xl font-[600]">221,224</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Bottom Row */}
                <div>Bottom</div>
            </div>

            {
                videoUploadModal &&
                <div className="absolute inset-0 backdrop-blur-lg"></div>
            }
            {
                videoUploadModal &&
                <VideoUploaderModal />
            }
        </div>
    )
}

export default DashboardPage