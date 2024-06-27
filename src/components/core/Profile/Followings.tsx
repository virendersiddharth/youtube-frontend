import DataNotFound from "@/components/common/DataNotFound"
import userImage from "@/assets/profile/userImage.png"
import { Button } from "@/components/ui/button"
const Followings = () => {

    const following = true
    return (
        <>

        {
            following? 
            <div
                className="flex flex-col gap-2"
            >
                
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
                    <SingleFollwing key={index}/>
                ))}
            </div>

            :

            <DataNotFound heading={'No people subscribed'} description={'This page has yet to subscribe a new person. '}/>

        }
    </>
    )
}

export default Followings

const SingleFollwing = () => {
    return (
        <div
            className="flex gap-4 justify-between"
        >
            <div
                className="flex gap-1"
            >
                <span
                    className="w-[60px]"
                >
                    <img src={userImage} alt="" />
                </span>
                <div
                    className="flex flex-col gap-[2px]"
                >
                    <span>Name</span>
                    <span>100K Followers</span>

                </div>
            </div>
            <div>
                <Button
                    variant={'followingSubscribed'}
                >Subscribe</Button>
            </div>
        </div>
    )
}