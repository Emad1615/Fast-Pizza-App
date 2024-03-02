import { Link } from "react-router-dom"

function Button({children,disabled,to,type}) {
    const base=`bg-yellow-400 text-sm inline-block rounded-full font-semibold text-stone-600 hover:bg-yellow-300 tracking-wider uppercase  transition-all duration-300 focus:outline-none
    focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed hover:shadow-lg`;
    const style={
        primary:base+' py-2 px-3',
        small:base+' py-2 px-2 text-xs',
        secondary:`py-2 px-3 text-sm bg-transparent text-stone-400  inline-block rounded-full hover:text-stone-600 text-stone-600 hover:bg-stone-200 tracking-wider uppercase  transition-all duration-300 focus:outline-none
        focus:text-stone-600  focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed  border border-stone-300 font-semibold`
    }
    if(to) return <Link className={style[type]} to={to}>{children}</Link>
    return (
        <button className={style[type]} disabled={disabled} >
            {children}
        </button>
    )
}

export default Button