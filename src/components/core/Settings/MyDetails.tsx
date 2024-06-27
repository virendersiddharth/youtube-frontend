import PersonalInfo from "./PersonalInfo"
import MyProfile from "./MyProfile"


const MyDetails = () => {
    return (
        <div
            className="flex flex-col gap-5"
        >
            <PersonalInfo/>

            <div
                className="relative h-[1px] w-full bg-white"
            ></div>

            <MyProfile/>
        </div>
    )
}

export default MyDetails