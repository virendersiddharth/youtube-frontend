

import { AspectRatio } from "@/components/ui/aspect-ratio"

import Logo from '@/assets/Home/Logo.png'
const data = {
    image : Logo
}

const VideoCard = ({search = {}} : {search : any}) => {
    // const search = true
    return (
        <div className={`flex ${search ? "flex-row h-[180px] justify-start" : "flex-col"} gap-3`}>
            <div className={`${search ? "w-[315px]" : ""}`}>
                <AspectRatio ratio={16 / 9}
                    className="w-full overflow-hidden rounded-xl"
                    >
                    <img
                        src={data.image}
                        alt=""
                        className="h-full object-cover"
                    />
                </AspectRatio>
                
            </div>
            <div className={`flex gap-1 ${search ? "flex-col-reverse justify-end" : "h-[100px]"}`}>


                {
                    search && 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam!</p>
                }

                <div className={`w-[65px] ${search ? "flex items-center" : ""}`}>
                    <img src={Logo} alt="" />
                    {
                        search && 
                        <span>Name</span>
                    }
                </div>
                <div>
                    <h2>
                        Lorem ipsum dolor sit amet.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    {
                        !search && 
                        <span>Name</span>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard