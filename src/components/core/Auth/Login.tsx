
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

import { user_login } from "../../../services/operations/authApi"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Login = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sendData = async(data: any) =>{
        console.log(data);
        const {username, email, password} = data;
        const result = user_login(username, email, password, navigate)
        console.log(result)
        // try {
        //     const result = await axios.post("http://localhost:8000/api/v1/users/login",{
        //         username,
        //         email,
        //         password
        //     })
        //     console.log(result.data.data)
        // } catch (error) {
        //     console.log(error);
        // }
        // // user_login(username, email, password, navigate);
        // console.log("Done");
        
        
    }
    return (
        <div
                    className="flex-1 max-w-[510px]"
                >
                    <form
                    onSubmit={handleSubmit((data)=>{sendData(data)})}

                    className="flex-1 flex flex-col gap-3 p-4"
                    >
                    <div
                        className='form-element'
                    >
                        <label htmlFor="username">Username </label>
                        <input type="text" {...register('username')}/>
                        {/* {errors.fullName && <p>Full name is required.</p>} */}
                    </div>
                    <p className="text-center">or</p>
                    <div
                        className='form-element'
                        >
                        <label htmlFor="email">Email <sup>*</sup></label>
                        <input type="email" {...register('email')}/>
                        {/* {errors.email && <p>Email is required.</p>} */}
                    </div>
                    <div
                        className='form-element'
                        >
                        <label htmlFor="password">Password <sup>*</sup></label>
                        <input type="password" {...register('password')}/>
                        {errors.password && <p>Password is required.</p>}
                    </div>

                    <Button type="submit" className='shadow-none'>Sign Up</Button>

                </form>
                </div>
    )
}

export default Login