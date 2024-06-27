import DataNotFound from "@/components/common/DataNotFound";
import userImage from "@/assets/profile/userImage.png"
import { BiDislike, BiLike } from "react-icons/bi";
import { Button } from "@/components/ui/button";
const Tweets = ({selfUser} : {selfUser: boolean}) => {
    const tweet = false;
    return (
        <>
            {
                selfUser && 
                <div
                    className="flex flex-col gap-2 w-full border p-2 mb-6"
                >
                    <div
                        className="w-full"
                    >
                        <input type="text" placeholder="Write an annoucement" className="w-full bg-transparent outline-none border-none text-lg"/>
                    </div>
                    <div
                        className="self-end"
                    >
                        <Button variant={"default1"} className="shadow-none text-lg">Send</Button>
                    </div>
                </div>
            }
            {
                tweet? 
                <div
                    className="flex flex-col gap-2"
                >
                    {
                        [0,1,2,3,4,5,6,7,8,9,10,11].map(({}, i)=>(
                            <SingleTweet key={i}/>
                        ))
                    }
                </div>
                    
                :
                
                <DataNotFound heading={'No Announcements'} description={'This page has yet to make an Announcements.'}/>
            }
        </>
    )
}

export default Tweets


const SingleTweet = () =>{
    return (
    <div
        className="flex gap-2 border-b-[1px]"
    >
        <span
            className="w-[70px] relative overflow-hidden"
        >
            <img src={userImage} alt="" 
                className="w-[100%]"
            />
        </span>
        <div>
            <div>
                <span>Name</span>
                <span>Time</span>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam distinctio provident dolorem.</p>
            <div
                className="flex items-center gap-2"
            >
                    <div
                        className="py-[10px] flex items-center gap-1"
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
        </div>
    </div>
    )
}