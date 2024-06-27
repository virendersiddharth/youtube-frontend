import Uploader from "@/components/common/Uploader";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";


const Signup = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();

    const sendData = (data: any) =>{
        console.log(data);
        
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
                        <label htmlFor="fullName">Full Name <sup>*</sup></label>
                        <input type="text" {...register('fullName')}/>
                        {errors.fullName && <p>Full name is required.</p>}
                    </div>
                    <div
                        className='form-element'
                        >
                        <label htmlFor="username">User Name <sup>*</sup></label>
                        <input type="text" {...register('username')}/>
                        {errors.fullName && <p>User name is required.</p>}
                    </div>
                    <div
                        className='form-element'
                        >
                        <label htmlFor="email">Email <sup>*</sup></label>
                        <input type="email" {...register('email')}/>
                        {errors.email && <p>Email is required.</p>}
                    </div>
                    {/* <div
                        className='form-element'
                        >
                        <label htmlFor="avatar">Profile Image <sup>*</sup></label>
                        <input type="file" {...register('avatar')}/>
                        {errors.avatar && <p>Profile image is required.</p>}
                    </div> */}
                    <div
                        className='form-element'
                        >
                        <label htmlFor="password">Password <sup>*</sup></label>
                        <input type="password" {...register('password')}/>
                        {errors.password && <p>Password is required.</p>}
                    </div>

                    <div
                        className='form-element'
                        >
                        <label htmlFor="avatar">Profile Image <sup>*</sup></label>
                        {/* <input type="file" {...register('avatar')}/> */}
                        <div
                            className='border rounded-[12px]'
                            >
                            <Uploader register={register} registerName="avatar" 
                            />                                                             
                        </div>
                        {errors.avatar && <p>Profile image is required.</p>}
                    </div>

                    <Button type="submit" className='shadow-none'>Sign Up</Button>

                </form>
                </div>
    )
}

export default Signup