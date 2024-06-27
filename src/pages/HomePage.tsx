import { Link, Outlet } from "react-router-dom"
import { SideBar, SideBarBottom } from "@/data/SideBar.tsx";
import { useEffect } from "react";


const HomePage = () => {

    // const location = useLocation();

    useEffect(()=>{
        console.log("Hello");
        
    },[])

    return (
        <section
            className="relative flex h-full"
        >
            {/* SideBar */}
            <div
                className="md:flex w-[280px] flex-col justify-between h-full text-white border-r border-white hidden"
            >
                <div
                    className="px-[16px] pt-[32px] flex flex-col gap-1"
                >
                    {
                        SideBar.map((el, index) => (
                            <SideBarElement key={index} data={el}/>
                        ))
                    }
                </div>
                <div className="px-[16px] pb-[32px] flex flex-col gap-1">
                    {
                        SideBarBottom.map((el, index)=>(
                            <SideBarElement key={index} data={el}/>
                        ))
                    }
                </div>
            </div>
            
            <div 
                className="flex-1 overflow-x-hidden "
            >
                <Outlet/>
            </div>
        </section>
    )
}

export default HomePage



const SideBarElement = ({ data = {} }: { data: any })=>{
    return (
        <Link to={data.path}
            className="flex items-center gap-2 py-2 px-3 border border-white overflow-x-hidden cursor-pointer"
        >
            <span>{data.icon}</span>
            <span className="text-[1rem]">{data.text}</span>
        </Link>
    )
}