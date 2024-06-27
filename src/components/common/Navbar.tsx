import Logo from '@/assets/Home/Logo.png'
import { Button } from '../ui/button'
import { HiDotsVertical } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { Input } from '../ui/input';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='h-[4.5rem] border-b border-white grid place-items-center'>
            <nav className='w-11/12 mx-auto flex items-center justify-between'>
                <Link to='/' 
                    className='w-[60px]'>
                    <img src={Logo} alt="" width={60}/>
                </Link>
                <div className='text-white w-[400px] relative'>
                    <IoIosSearch
                        className='absolute top-[50%] translate-y-[-50%] right-2'
                        size={24}
                    />
                    <Input placeholder='Search'/>
                </div>
                <div className='flex items-center gap-5'>
                    <HiDotsVertical color='white' size={22}/>
                    <Link to='/login'>
                        <Button variant={'ghost'}>Log in</Button>
                    </Link>
                    <Link to='/register'>
                        <Button variant={'default'}>Sign up</Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar