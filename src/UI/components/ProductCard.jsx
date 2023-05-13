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
            <div className={'w-[300px] mb-8 flex flex-col justify-between relative'} ref={ref}>
                <img src={product.img} alt="" className={'w-full max-h-[70%]'}/>
                <p className={'font-bold text-lg'}>{product.name}</p>
                <p className={''}>Цена : {product.price} Руб</p>
                <img
                    src={favouriteData.find(item => item.id === product.id) ? 'icons8-heart-prpl-100.webp' : 'icons8-heart-100.webp'}
                    alt="" className={'absolute right-1 top-1 w-8 cursor-pointer'}
                    onClick={() => dispatch(actionFavourite(product))}/>
                <div className={'w-full flex justify-between mt-3'}>
                    <motion.div className="flex items-center w-2/5 h-9"
                                animate={basketData.find(item => item.id === product.id) ? {scale: 0} : {scale: 1}}>
                        <button className="w-1/3 bg-prpl h-full rounded-l-xl text-slate-50"
                                onClick={() => counter < 2 ? setCounter(1) : setCounter(prevState => prevState - 1)}>-
                        </button>
                        <div className="h-full border-y border-prpl w-1/3 flex items-center">
                            <div className="w-full text-center">{counter}</div>
                        </div>
                        <button className="w-1/3 bg-prpl h-full rounded-r-xl text-slate-50"
                                onClick={() => setCounter(prevState => prevState + 1)}>+
                        </button>
                    </motion.div>
                    {basketData.find(item => item.id === product.id) ?
                        <button
                            className={'w-36 h-9 bg-gray ml-auto rounded-xl text-prpl'}
                            onClick={() => {
                                dispatch(actionBasket({...product, counter: counter}))
                            }}>В корзине
                        </button> :
                        <button
                            className={'w-36 h-9 bg-prpl rounded-xl text-slate-50 active:bg-purple-500 duration-200'}
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