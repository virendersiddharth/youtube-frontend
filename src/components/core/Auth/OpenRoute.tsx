import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const OpenRoute = ({children}: any) => {
    const {token} = useSelector((state : any) => state.auth)
    
    if(token === null){
        return children
    }
    else{
        return <Navigate to='/dashboard'/>
    }

}

export default OpenRoute