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
            <div className={'md:w-[300px] xsm:w-5/12 mb-8 flex flex-col justify-between relative'} ref={ref}>
                <img src={product.img} alt="" className={'w-full max-h-[70%] rounded-xl'}/>
                <p className={'font-bold sm:text-[16px] xsm:text-sm md:text-lg xsm:mt-2 md:mt-0'}>{product.name}</p>
                <p className={'xsm:mt-1 md:mt-0 xsm:text-sm sm:text-[15px]'}>Цена : {product.price} Руб</p>
                <img
                    src={favouriteData.find(item => item.id === product.id) ? 'icons8-heart-prpl-100.webp' : 'icons8-heart-100.webp'}
                    alt="" className={'absolute right-1 top-1 w-8 cursor-pointer xsm:mt-2 md:mt-0'}
                    onClick={() => dispatch(actionFavourite(product))}/>
                <div className={'w-full md:flex-row xsm:flex-col xsm:items-center flex justify-between xsm:mt-1 md:mt-0'}>
                    <motion.div className="xsm:w-full sm:h-8 xsm:h-6 flex items-center md:w-2/5 md:h-9"
                                animate={basketData.find(item => item.id === product.id) ? {scale: 0} : {scale: 1}}>
                        <button className="w-1/3 bg-gradient-to-r from-amber-800 via-amber-700 to-orange-800 h-full rounded-l-xl text-slate-50"
                                onClick={() => counter < 2 ? setCounter(1) : setCounter(prevState => prevState - 1)}>-
                        </button>
                        <div className="h-full border-y border-prpl w-1/3 flex items-center">
                            <div className="w-full text-center">{counter}</div>
                        </div>
                        <button className="w-1/3 bg-gradient-to-r from-amber-800 via-amber-700 to-orange-800 h-full rounded-r-xl text-slate-50"
                                onClick={() => setCounter(prevState => prevState + 1)}>+
                        </button>
                    </motion.div>
                    {basketData.find(item => item.id === product.id) ?
                        <button
                            className={'sm:h-8 xsm:h-6 xsm:mt-2 xsm:w-full md:w-36 md:h-9 md:mt-0 xsm:text-sm md:text-[16px] bg-gray ml-auto rounded-xl text-prpl'}
                            onClick={() => {
                                dispatch(actionBasket({...product, counter: counter}))
                            }}>В корзине
                        </button> :
                        <button
                            className={'sm:h-8 xsm:h-6 xsm:mt-2 xsm:w-full md:w-36 md:h-9 md:mt-0 bg-gradient-to-r from-amber-800 via-amber-700 to-orange-800 xsm:text-sm md:text-[16px] rounded-xl text-slate-50 active:bg-purple-500 duration-200'}
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