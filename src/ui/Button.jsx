import { Link } from "react-router-dom"

function Button({children,disabled,to,type}) {
    // const className=`bg-yellow-400 py-2 px-3 inline-block rounded-full font-semibold text-stone-600 mx-2 hover:bg-yellow-300 tracking-wider uppercase  transition-all duration-300 focus:outline-none
    // focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed hover:shadow-lg`;
    const base=`bg-yellow-400  inline-block rounded-full font-semibold text-stone-600 mx-2 hover:bg-yellow-300 tracking-wider uppercase  transition-all duration-300 focus:outline-none
    focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed hover:shadow-lg`;
    const style={
        primary:base+' py-2 px-3',
        small:base+' py-2 px-2 text-xs'
    }
    if(to) return <Link className={style[type]} to={to}>{children}</Link>
    return (
        <button className={style[type]} disabled={disabled} >
            {children}
        </button>
    )
}

export default Button