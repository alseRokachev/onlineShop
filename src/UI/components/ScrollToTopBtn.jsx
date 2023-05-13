import {motion} from "framer-motion";
import {forwardRef} from "react";

const Btn = forwardRef(({},ref) => {
	return (
		<div className={'w-14 shadow-md shadow-slate-950 bg-slate-50 h-14 rounded-full z-50 fixed right-2 bottom-2 flex justify-center items-center'} ref={ref} onClick={() => window.scrollTo(0,0)}>
			<img src="icons8-up-100.webp" alt="" className={'w-full h-full'}/>
		</div>
	)
})

export const ScrollToTopBtn = motion(Btn)