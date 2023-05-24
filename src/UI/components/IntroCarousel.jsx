import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

export const IntroCarousel = () => {
    const data = useSelector(state => state.goodsData.introPagesData)
    const [width, setWidth] = useState(0)
    const [scroll, setScroll] = useState(0)
    const carousel = useRef()
    useEffect(() => {
        setTimeout(() => setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth), 500)
    }, [window.innerWidth])
    return (
        <div className={'w-full relative flex justify-center'}>
            <motion.div className="flex w-full h-fit overflow-hidden" ref={carousel} whileTap={{cursor: "grabbing"}}>
                <motion.div
                    drag="x"
                    dragConstraints={{right: 0, left: -width}}
                    className={`lg:h-[300px] md:h-[250px] xsm:h-[20vh] sm:h-[22vh] w-fit hover:cursor-grab relative flex max-h-[100vw]`}>
                    {data.map((item, index) => (
                        <motion.div className={'w-fit min-w-full'} key={index} whileInView ={() => setScroll(index)} viewport={{amount: 0.7}}>
                            <img src={item.img} alt=""
                                 className={'w-full pointer-events-none h-full'}/>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <div className="absolute bottom-2 xsm:w-[80px] md:w-[100px] flex justify-between items-center">
                {data.map((item,index) => {
                 return (
                     <div className={`${index === scroll ? 'bg-gray' : 'bg-slate-200'} shadow-sm shadow-slate-950 md:w-4 md:h-4 xsm:w-3 xsm:h-3 bg-slate-200 rounded-full`}></div>
                 )
                })}
            </div>
        </div>
    )
}