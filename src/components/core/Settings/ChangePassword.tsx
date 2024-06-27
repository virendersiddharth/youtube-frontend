import { Button } from "@/components/ui/button"

const ChangePassword = () => {
    return (
        <div>
            <div
                className="flex flex-col gap-4"
            >
                <div>
                    <h2>Password</h2>
                    <p>Please enter your current password to change your password.</p>
                </div>

                <div
                    className="relative h-[1px] w-full bg-white"
                ></div>

                <form action=""
                    className="flex flex-col gap-2"
                >
                    <div
                        className="flex-1 flex flex-col gap-1"
                    >
                        <label htmlFor="currentPassword">Current password</label>
                        <input type="password" name="currentPassword" id="currentPassword" />
                    </div>
                    <div
                        className="flex-1 flex flex-col gap-1"
                    >
                        <label htmlFor="newPassword">New password</label>
                        <input type="password" name="newPassword" id="newPassword" />
                    </div>
                    <div
                        className="flex-1 flex flex-col gap-1"
                    >
                        <label htmlFor="confirmNewPassword">Confirm new password</label>
                        <input type="password" name="confirmNewPassword" id="confirmNewPassword" />
                    </div>

                    <div
                        className="relative h-[1px] w-full bg-white mt-4"
                    ></div>

                    {/* Buttons */}
                    <div
                        className="flex gap-2 self-end px-8 py-4"
                    >
                        <Button variant={'outline'}>Cancel</Button>
                        <Button className="text-sm shadow-none font-[600]">Update Password</Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ChangePassword