import FeatureIcon from "@/assets/ErrorPageIcon/FeaturedIcon.png"

const DataNotFound = ({heading = "", description = ""}: {heading : any, description: any}) => {
    return (
        <section className='w-full relative h-full grid place-items-center text-white'>
            <div
                className="w-[350px] flex flex-col items-center gap-4"
            >
                <div
                    className="w-[60px]"
                >
                    <img src={FeatureIcon} alt="" />
                </div>
                <div
                    className="flex flex-col items-center gap-2"
                >
                    <h2
                        className="text-center text-xl font-[600]"
                        >
                        {heading}
                    </h2>
                    <p
                        className="text-center text-[1rem] font-normal"
                        >
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DataNotFound