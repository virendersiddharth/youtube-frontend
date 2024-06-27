import { Button } from "@/components/ui/button"

const MyProfile = () => {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-12 gap-5"
        >
            <div
                className="sm:col-span-3 text-[14px] font-[500] flex flex-col gap-1"
            >
                <span>Profile</span>
                <span>Update your portfolio and bio.</span>
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
                            className="flex gap-6"
                        >
                            <div
                                className="flex-1 flex flex-col gap-1"
                            >
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" />
                            </div>
                            {/* <div
                                className="flex-1 flex flex-col gap-1"
                            >
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" id="lastName" />
                            </div> */}
                        </div>
                        <div
                            className="flex flex-col gap-1"
                        >
                            <label htmlFor="description">Description</label>
                            {/* <input type="email" name="email" id="email" /> */}
                            <textarea name="description" id="description" className="h-[150px]"/>
                        </div>
                    </div>

                    {/* Buttons */}
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

export default MyProfile