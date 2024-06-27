import { Button } from "@/components/ui/button"
import { MdOutlineEmail } from "react-icons/md";

const PersonalInfo = () => {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-12 gap-5"
        >
            <div
                className="sm:col-span-3 text-[14px] font-[500] flex flex-col gap-1"
            >
                <span>Personal info</span>
                <span>Update your photo and personal details.</span>
            </div>
            <div
                className="sm:col-span-9 rounded-xl border"
            >
                <form action=""
                    className="flex flex-col"
                >
                    {/* First Name and Last Name */}
                    <div className="p-8 border-b flex flex-col gap-3">

                        <div
                            className="flex gap-6 flex-wrap"
                        >
                            <div
                                className="flex-1 min-w-[200px] flex flex-col gap-1"
                            >
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" id="firstName" />
                            </div>
                            <div
                                className="flex-1 min-w-[200px] flex flex-col gap-1"
                            >
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" id="lastName" />
                            </div>
                        </div>
                        <div
                            className="flex flex-col gap-1"
                        >
                            <label htmlFor="email">Email address</label>
                            <div className="relative">
                                <MdOutlineEmail size={24} className="absolute top-[50%] translate-y-[-50%] left-2 text-white/50"/>
                                <input type="email"name="email" id="email" className="pl-10"/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex gap-2 self-end px-8 py-4"
                    >
                        <Button variant={'outline'}>Cancel</Button>
                        <Button className="text-sm shadow-none font-[600]">Save Changes</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PersonalInfo