import DataNotFound from "@/components/common/DataNotFound";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// import userImage from "@/assets/profile/userImage.png"

const Playlists = () => {
    const playlist = true;
    return (
        <>
            {
                playlist? 
                <div
                    className="grid grid-cols-2 gap-6"
                >
                    {
                        [0,1,2,3,4,5,6,7,8,9].map((i) =>(
                            <PlaylistCard key={i}/>
                        ))
                    }
                </div> 
                
                :

                <DataNotFound heading={'No libraries created'} description={'there are no playlists inside this library'}/>
            }
        </>
        )
}

export default Playlists

const PlaylistCard = () => {
    return (
        <div className="flex flex-col gap-4">
            <div
                className="overflow-hidden relative"
            >
        
                    <AspectRatio ratio={16/9}
                        className="z-10 relative"
                    >
                        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" alt="" />
                    </AspectRatio>
                

                <div
                    className="absolute bottom-0 w-full z-[1000] backdrop-blur-lg flex justify-between p-[1.5rem]"
                >
                    <div>
                        <span
                            className="text-[1rem] font-[600]"
                        >
                            Playlist
                        </span>
                        <div
                            className="text-[1rem] font-normal"
                        >
                            <span>100k views . 18 hours ago</span>
                        </div>
                    </div>
                    <span
                        className="text-[1rem] font-[600]"
                    >
                        32 videos
                    </span>
                </div>
            </div>

            <div
                className="flex flex-col gap-1"
            >
                <h2
                    className="text-[1.5rem] leading-[32px] font-[500]"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </h2>

                <p
                    className="text-[1rem] font-normal"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci veritatis suscipit tempora!
                </p>

            </div>
        </div>
    )
}