import { useState } from "react"
import { FaCloudUploadAlt } from "react-icons/fa";

const Uploader = ({register, registerName}: {register: any, registerName : string}) => {

    const [currentFile, setCurrentFile] = useState(null);
    const [currentImage, setCurrentImage] = useState("");

    return (
        <div
            className="w-full h-full overflow-hidden"
            onClick={()=>{document.getElementById("takeFile")?.click()}}
        >
            <div
                className="w-full h-full relative"
            >
                {
                    currentImage ?
                    <img src={currentImage} alt=""
                        className="h-full w-full object-cover"
                    />

                    :

                    <div
                        className="absolute top-0 bottom-0  left-0 right-0 flex flex-col items-center justify-center gap-3"
                    >
                        <div
                            className="grid place-items-center w-[60px] aspect-square border rounded-full bg-white"
                        >
                            <FaCloudUploadAlt size={26} color="black"/>
                        </div>
                        <div
                            className="flex flex-col gap-1 items-center"
                        >

                            <div
                                className="text-[1rem] flex gap-2"
                            >
                                <span className="text-[#9747FF]">Click to upload</span>
                                <span>or drag and drop</span>
                            </div>
                            <div
                                className="text-[0.9rem]"
                            >
                                SVG, PNG, JPG or GIF (max. 800x400px)
                            </div>
                        </div>
                    </div>
                }
            </div>
            <input type="file" name="" id="takeFile" 
                className="border-none hidden"
                {...register(registerName)}
                onChange={(event: any)=>{
                    setCurrentFile(event.target.files[0].name);
                    setCurrentImage(URL.createObjectURL(event.target.files[0]));
                }}
            />
        </div>
    )
}

export default Uploader