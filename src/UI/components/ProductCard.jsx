import {useDispatch, useSelector} from "react-redux";
import {actionBasket, actionFavourite} from "../../store/user";
import {motion} from "framer-motion";
import {forwardRef, useState} from "react";

export const ProductCard = forwardRef(
    ({product}, ref) => {
        const dispatch = useDispatch()
        const favouriteData = useSelector(state => state.userData.favourite)
        const basketData = useSelector(state => state.userData.basket)
        const [counter, setCounter] = useState(1)
        return (
            <div
                className={'lg:w-[300px] md:w-1/3 xsm:w-5/12 lg:max-h-[396px] mb-8 flex flex-col justify-between relative shadow-md rounded-xl'}
                ref={ref}>
                <img src={product.img} alt=""
                     className={'w-full lg:max-h-[70%] xsm:max-h-[60%] object-fill rounded-t-xl'}/>
                <p className={'font-bold xsm:text-[13px] sm:text-[16px] md:text-lg xsm:text-center xsm:mt-2 xsm:h-full xsm:px-0.5 xsm:flex xsm:items-center xsm:justify-center lg:h-fit md:mt-0'}>{product.name}</p>
                <p className={'xsm:mt-1 md:mt-0 xsm:text-[12px] sm:text-[15px] xsm:text-center'}>Цена : {product.price} Руб</p>
                <img
                    src={favouriteData.find(item => item.id === product.id) ? 'icons8-heart-prpl-100.webp' : 'icons8-heart-100.webp'}
                    alt="" className={'absolute right-1 top-0 xsm:w-7 md:w-8 cursor-pointer xsm:mt-1 md:mt-0'}
                    onClick={() => dispatch(actionFavourite(product))}/>
                <div
                    className={'w-full lg:flex-row xsm:flex-col xsm:items-center flex justify-between xsm:mt-1 md:mt-0 px-1 pb-3'}>
                    <motion.div className="xsm:w-full sm:h-8 xsm:h-6 flex items-center lg:w-2/5 md:h-9"
                                animate={basketData.find(item => item.id === product.id) ? {scale: 0} : {scale: 1}}>
                        <button
                            className="w-1/3 bg-gray h-full rounded-l-xl text-slate-50"
                            onClick={() => counter < 2 ? setCounter(1) : setCounter(prevState => prevState - 1)}>-
                        </button>
                        <div className="h-full border-y border-gray w-1/3 flex items-center">
                            <div className="w-full text-center">{counter}</div>
                        </div>
                        <button
                            className="w-1/3 bg-gray h-full rounded-r-xl text-slate-50"
                            onClick={() => setCounter(prevState => prevState + 1)}>+
                        </button>
                    </motion.div>
                    {basketData.find(item => item.id === product.id) ?
                        <button
                            className={'sm:h-8 xsm:h-6 xsm:mt-2 xsm:w-full lg:w-36 md:h-9 lg:mt-0 xsm:text-sm md:text-[16px] border-prpl bg-prpl text-slate-50 ml-auto rounded-xl'}
                            onClick={() => {
                                dispatch(actionBasket({...product, counter: counter}))
                            }}>В корзине
                        </button> :
                        <button
                            className={'sm:h-8 xsm:h-6 xsm:mt-2 xsm:w-full lg:w-36 md:h-9 lg:mt-0 border border-prpl text-prpl hover:bg-slate-200 xsm:text-sm md:text-[16px] rounded-xl active:bg-purple-500 duration-200'}
                            onClick={() => {
                                dispatch(actionBasket({...product, counter: counter}))
                                setCounter(1)
                            }}>Купить
                        </button>
                    }
                </div>
            </div>
        )
    }
)

export const MProductCard = motion(ProductCard)