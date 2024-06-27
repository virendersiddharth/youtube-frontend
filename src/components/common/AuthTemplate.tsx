

import signup from "@/assets/Frame/signup.jpg"
import Login from "../core/Auth/Login";
import Signup from "../core/Auth/Signup";

const AuthTemplate = ({login}: {login : boolean}) => {

    return (
        <section className="w-full text-white py-24">
            <div
                className="w-11/12 max-w-[1260px] mx-auto flex gap-20 justify-between items-start h-full"
            >
                {
                    login && 
                    <Login/>
                }
                {
                    !login && 
                    <Signup/>
                }
                <div
                    className="flex-1 max-w-[480px] bg-frame relative aspect-square "
                >
                    <img src={signup} alt="" 
                        className="relative w-full h-full object-cover bottom-3 right-3"
                    />
                </div>
            </div>
        </section>
    )
}

export default AuthTemplate