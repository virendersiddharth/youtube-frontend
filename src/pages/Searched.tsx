import DataNotFound from "@/components/common/DataNotFound"
import VideoCard from "@/components/common/VideoCard"

const Searched = () => {
    const video = true
    return (
        <>
            {
                video ? 

                <section
                    className="text-white flex flex-col gap-5"
                    >
                    {
                        [0,1,2,3,4,5,6,7,8,9].map((i) =>(
                            <VideoCard key={i} search={true}/>
                            ))
                        }
                </section>

                :

                <DataNotFound heading="No videos found" description="There are no videos here for your search result. Please try to search some thing else."/>
            }
        </>
    )
}

export default Searched
