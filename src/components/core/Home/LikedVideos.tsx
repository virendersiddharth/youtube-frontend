import VideoCard from "@/components/common/VideoCard"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const LikedVideos = () => {
    const {token} = useSelector((state : any) => state.auth)
    return (
        <>
            {
                token ? 

                    <div
                        className="w-full relative grid grid-cols-auto-fit-200 text-white  gap-4 p-[16px]"
                        >
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                                <VideoCard key={i} search={false} />
                            ))
                        }
                    </div>

                :

                    <div
                        className="w-full h-full grid place-content-center gap-y-4"
                    >
                        <h2
                            className="text-3xl text-white text-center"
                        >
                            Please login
                        </h2>
                        <Link to="/login"
                            className="grid place-content-center"
                        >
                            <Button variant={"default"}
                                className="shadow-none"
                            >
                                Login
                            </Button>
                        </Link>
                    </div>


            }
        </>
    )
}

export default LikedVideos