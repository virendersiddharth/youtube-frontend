
import DataNotFound from '@/components/common/DataNotFound'
import VideoCard from '@/components/common/VideoCard.tsx'
const Home = () => {
    const video = true
    return (
        <>

            {
                video ? 
                    <section className='w-full relative grid grid-cols-auto-fit-200 text-white  gap-4 p-[16px]'>
                        {
                            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((index)=>(
                                <VideoCard key={index} search={false}/>
                                ))
                            }
                    </section>
                :
                    <DataNotFound
                        heading="No videos avaliable"
                        description="There are no videos here available. Please try to search some thing else."
                    />
            }
        </>
    )
}

export default Home