import {motion} from "framer-motion";
import {actionBasket, actionFavourite, changeCounter} from "../../store/user";
import {useDispatch, useSelector} from "react-redux";

export const ModalItem = ({activeModal, index, item, basket}) => {
    const dataBasket = useSelector(state => state.userData.basket)
    const dispatch = useDispatch()
    return (
        <motion.div
            className={`w-full md:h-16 xsm:h-32 xsm:relative flex bg-slate-50 items-center rounded-xl`}
            initial={window.innerWidth > 740 ? {opacity: 0, y: -10} : {opacity: 1, y: 0}}
            animate={activeModal ? {opacity: 1, y: 0} : {}}
            transition={{delay: 0.2 * index}} key={index}
        >
            <div
                className={`md:h-16 md:w-2/5 xsm:h-32 xsm:w-full flex items-center`}>
                <img src={item.img} alt=""
                     className={`h-full md:w-16 xsm:w-32 rounded-l-xl`}/>
                <p className={'xsm:text-[14px] sm:text-[15px] xsm:mx-2 xsm:text-center md:mx-4 font-bold'}>{item.name}</p>
            </div>
            <div
                className={`md:w-3/5 md:justify-between md:flex-row xsm:flex-col xsm:justify-evenly flex items-center h-full`}>
                <div
                    className={`md:w-2/5 md:pl-8 md:h-full md:flex md:items-center md:justify-center md:static sm:text-[15px] xsm:w-fit xsm:text-center xsm:absolute xsm:bottom-0 xsm:text-[14px] xsm:right-3`}>
                    <p>Цена : {item.price} Руб</p>
                </div>
                {basket && (
                    <div
                        className={`md:w-2/6 md:static xsm:w-32 xsm:absolute xsm:left-0 xsm:bottom-0 h-7 flex`}>
                        <button
                            className={`md:rounded-l-xl xsm:rounded-bl-xl w-1/3 bg-prpl h-full text-slate-50`}
                            onClick={() => dispatch(changeCounter({...item, counter: item.counter - 1}))
                            }>-
                        </button>
                        <div
                            className={`md:w-1/3 xsm:bg-slate-200 xsm:w-2/5 h-full border-y border-prpl flex items-center md:text-[15px] xsm:text-[14px]`}>
                            <div className="w-full text-center">{item.counter} шт</div>
                        </div>
                        <button
                            className={`md:rounded-r-xl xsm:rounded-none w-1/3 bg-prpl h-full text-slate-50`}
                            onClick={() => dispatch(changeCounter({...item, counter: item.counter + 1}))

                            }>+
                        </button>
                    </div>
                )}
                {!basket && (
                    dataBasket.find(el => el.id === item.id) ?
                        <button className={'xsm:hidden sm:block'} onClick={() => dispatch(actionBasket(item))}> Убрать из корзины</button> :
                        <button className={'xsm:hidden sm:block'} onClick={() => dispatch(actionBasket({...item, counter: 1}))}>Добавить в корзину</button>
                )}
                <div
                    className={`md:pr-4 md:static xsm:absolute xsm:right-2 xsm:top-0 w-1/5 flex justify-end`}>
                    <img src='icons8-minus-100.webp' alt="" className={'w-7 hover:cursor-pointer'}
                         onClick={() => basket ? dispatch(actionBasket(item)) : dispatch(actionFavourite(item))}/>
                </div>
            </div>
        </motion.div>
    )
}
