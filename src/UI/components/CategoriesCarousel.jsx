import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

export const CategoriesCarousel = () => {
    const data = useSelector(state => state.goodsData.goodsCategories)
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    useEffect(() => {
        setTimeout(() => setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth), 500)
    }, [window.innerWidth])
    return (
        <div className={'w-full h-fit mt-2 px-2'}>
            <p className={'text-xl'}>Категории</p>
            <motion.div className="max-w-full mt-2 pb-3 overflow-hidden h-[80px]" ref={carousel}>
                <motion.div className="flex justify-between gap-[1vw] items-center" whileTap={{cursor: 'grabbing'}}
                            drag="x"
                            dragConstraints={{right: 0, left: -width}}>
                    {data.map((item, index) => (
                        <motion.button key={item.name}
                                       className={`xsm:mb-2 md:mb-0 xsm:min-w-[160px] xsm:h-[70px] xsm:text-[13px] sm:text-sm md:text-[15px] bg-prpl font-bold rounded-xl px-3 py-0.5 text-slate-50`}
                                       initial={{height: 45}} whileInView={{height: 70}} viewport={{amount: 0.2}}
                        >
                            {item.name}
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}