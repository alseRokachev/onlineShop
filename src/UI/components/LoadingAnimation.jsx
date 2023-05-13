import {motion} from "framer-motion";

const loadingCircle = {
    anim: {
        backgroundColor: '#5C2018',
        y: ['0%', '100%', '0%'],
        rotate: 360
    },
}
export const LoadingAnimation = () => {
    return (
        <div className={'flex w-[70px] justify-between'}>
            <motion.div className="mt-[40vh] mb-[40vh] w-4 h-4 bg-prpl rounded-full"
                        variants={loadingCircle}
                        animate='anim' transition={{ease: 'linear', duration: 1.5, repeat: Infinity, delay: 0.2}}>
            </motion.div>
            <motion.div className="mt-[40vh] mb-[40vh] w-4 h-4 bg-prpl rounded-full"
                        variants={loadingCircle}
                        animate='anim' transition={{ease: 'linear', duration: 1.5, repeat: Infinity, delay: 0.4}}>
            </motion.div>
            <motion.div className="mt-[40vh] mb-[40vh] w-4 h-4 bg-prpl rounded-full"
                        variants={loadingCircle}
                        animate='anim' transition={{ease: 'linear', duration: 1.5, repeat: Infinity, delay: 0.6}}>
            </motion.div>
        </div>
    )
}