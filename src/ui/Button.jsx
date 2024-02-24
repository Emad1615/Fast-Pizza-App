import { Link } from "react-router-dom"

function Button({children,disabled,to}) {
    const className=`bg-yellow-400 py-2 px-3 inline-block rounded-full font-semibold text-stone-600 mx-2 hover:bg-yellow-300 tracking-wider uppercase  transition-all duration-300 focus:outline-none
    focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed hover:shadow-lg`;
    if(to) return <Link className={className} to={to}>{children}</Link>
    return (
        <button className={className} disabled={disabled} >
            {children}
        </button>
    )
}

export default Button