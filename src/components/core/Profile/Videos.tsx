import DataNotFound from "@/components/common/DataNotFound";
import VideoCard from "@/components/common/VideoCard";
import { Button } from "@/components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import VideoUploaderModal from "./UploadVideo/VideoUploaderModal";
import { setVideoUploadModal } from "@/slices/ProfileSlice";
const Videos = ({selfUser}: {selfUser: boolean}) => {

    const videos = false

    const {videoUploadModal} = useSelector((state: any)=> state.profile)
    const dispatch = useDispatch()
    // const user = true;
    return (
        <>

        {
            videos?
            <div
                className="grid grid-cols-auto-fit-200"
            >
                
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
                    <VideoCard key={index} search={false} />
                ))}
            </div>

            :
            <>
                <DataNotFound heading={'No videos uploaded'} description={`${selfUser ? "Click to upload new video. You have yet to upload a video." : "This page has yet to upload a video. Search another page in order to find more videos."}`}/>
                {/* <Button></Button> */}
                {
                    selfUser &&
                    <div
                        className="flex justify-center mt-5"
                    >
                        <Button
                            className="shadow-none"
                            onClick={()=>{dispatch(setVideoUploadModal(true))}}
                        >
                            <IoMdAdd/>
                            <span>New Video</span>
                        </Button>
                    </div>
                }
            </>

        }

        {
            videoUploadModal &&
            <div className="absolute inset-0 backdrop-blur-lg"></div>
        }
        {
            videoUploadModal &&
            <VideoUploaderModal/>
        }

    </>
    );
};

export default Videos;
