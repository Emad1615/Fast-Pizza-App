import { Link, useNavigate } from "react-router-dom"

function LinkButton({children,to}) {
    const navigate=useNavigate();
    const className=`text-blue-500 hover:underline hover:text-blue-700`
    if(to==="-1")
    return  <button onClick={()=>navigate(-1,{replace:true})} className={className}>
                {children}
             </button>
    return (
        <Link to={to} className={className}>
             {children}
        </Link>
    )
}

export default LinkButton
