import Uploader from "@/components/common/Uploader"
import { Button } from "@/components/ui/button"
import { setVideoUploadModal } from "@/slices/ProfileSlice";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
// import { register } from "module"

const VideoUploaderModal = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const dispatch = useDispatch()



    return (
        <div
            className="absolute inset-0 flex items-center justify-center py-10 h-[calc(100vh-6rem)]"
        >
            <div
                className="bg-black relative h-full w-11/12 border"
            >
                <div
                    className="flex items-center justify-between px-8 py-4 border-b h-[5rem]"
                >
                    <span className="text-lg font-[600] text-white">Upload Videos</span>
                    <div
                        className="flex items-center gap-6"
                    >
                        <Button variant={'outline'} className="text-lg"
                            onClick={()=>{dispatch(setVideoUploadModal(false))}}
                        >Cancel</Button>
                        <Button variant={'default'}
                            onClick={()=>{document.getElementById('submitButton')?.click()}}
                        >Upload Video</Button>
                    </div>
                </div>
                <div
                    className="relative h-[calc(100%-5rem)] border border-red-50 overflow-x-hidden"
                >
                    <form action=""
                        className="w-[60%] mx-auto py-8 flex flex-col gap-4"
                        onSubmit={handleSubmit(data=> console.log(data))}
                    >
                        
                        <AspectRatio ratio={16/9}
                            className="border"
                        >

                            <Uploader register={register} registerName={'videoFile'}/>
                        </AspectRatio>
                        
                        <div>
                            <label htmlFor="">Thumbnail<span>*</span> </label>
                            <input type="file" {...register("thumbnail")}
                                className="rounded-none"
                            />
                            {errors.fullName && <p>Thumbnail is required.</p>}
                        </div>
                        <div>
                            <label htmlFor="">Title<span>*</span> </label>
                            <input type="text" {...register("title")}
                                className="rounded-none"/>
                            
                            {errors.fullName && <p>Title is required.</p>}
                        </div>
                        <div>
                            <label htmlFor="">Description<span>*</span> </label>
                            <input type="text" {...register("description")}                                className="rounded-none"/>
                            {errors.fullName && <p>Description is required.</p>}
                        </div>

                        <button
                            id="submitButton"
                            className="hidden"
                        >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VideoUploaderModal