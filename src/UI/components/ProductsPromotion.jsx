import {useSelector} from "react-redux";
import {MProductCard} from "./ProductCard";

const productAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}
export const ProductsPromotion = () => {
    const data = useSelector(state => state.goodsData.goodsData)
    return (
        <div className={'mt-2 px-2'}>
            <p className={'text-xl'}>Для вас</p>
            <div className={`md:justify-between xsm:justify-between w-full flex flex-wrap mt-3 gap-4 overflow-hidden`}>
                {data.map((item, index) => (
                    <MProductCard
                        product={item}
                        key={index}
                        initial="hidden"
                        variants={productAnimation}
                        animate="visible"
                        custom={index}
                        viewport={{amount: 0.5}}
                    />
                ))}
            </div>
        </div>
    )
}