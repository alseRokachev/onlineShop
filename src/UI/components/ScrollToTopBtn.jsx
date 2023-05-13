import {motion} from "framer-motion";
import {forwardRef} from "react";

const Btn = forwardRef(({},ref) => {
	return (
		<div className={'md:w-14 md:h-14 xsm:w-10 xsm:h-10 shadow-md shadow-slate-950 bg-slate-50 rounded-full z-50 fixed right-2 bottom-2 flex justify-center items-center'} ref={ref} onClick={() => window.scrollTo(0,0)}>
			<img src="icons8-up-100.webp" alt="" className={'w-full h-full'}/>
		</div>
	)
})

export const ScrollToTopBtn = motion(Btn)