import {motion} from "framer-motion";
import {actionBasket, actionFavourite, changeCounter} from "../../store/user";
import {useDispatch, useSelector} from "react-redux";

export const ModalItem = ({activeModal, index, item, basket}) => {
    const dataBasket = useSelector(state => state.userData.basket)
    const dispatch = useDispatch()
    return (
        <motion.div
            className={`w-full md:h-16 xsm:min-h-[70px] xsm:max-h-[70px] xsm:relative flex bg-slate-50 items-center rounded-md`}
            initial={window.innerWidth > 740 ? {opacity: 0, y: -10} : {opacity: 1, y: 0}}
            animate={activeModal ? {opacity: 1, y: 0} : {}}
            transition={{delay: 0.2 * index}} key={index}
        >
            <div className="h-full">
                <img src={item.img} alt="" className={'h-14 w-14 rounded-br-md rounded-tl-md'}/>
            </div>
            <div className="w-1/2 h-full ml-2 flex flex-col justify-between">
                <div className="h-1/2 mt-2 flex items-center">
                    <p className={'xsm:text-[13px] md:text-[15px]'}>{item.name}</p>
                </div>
                <p className={'xsm:text-[12px] md:text-[14px] mb-1'}><span className={'font-bold'}>{item.price}</span> Р
                    за шт</p>
            </div>
            {basket && (
                <div
                    className="md:max-w-[140px] xsm:max-w-[80px] w-full md:h-8 xsm:h-7 flex text-slate-50 absolute right-1 bottom-1">
                    <button className="bg-prpl h-full w-1/3 rounded-l-md"
                            onClick={() => dispatch(changeCounter({...item, counter: item.counter - 1}))}>-
                    </button>
                    <div className="bg-prpl h-full w-1/3 flex items-center justify-center text-xs">
                        {item.counter}
                    </div>
                    <button className="bg-prpl h-full w-1/3 rounded-r-md"
                            onClick={() => dispatch(changeCounter({...item, counter: item.counter + 1}))}>+
                    </button>
                </div>
            )}
            {!basket && (
                dataBasket.find(el => el.id === item.id) ?
                    <button className={'xsm:absolute right-2 bottom-0 sm:block xsm:text-[13px] md:text-[15px]'} onClick={() => dispatch(actionBasket(item))}> Убрать из
                        корзины</button> :
                    <button className={'xsm:absolute right-2 bottom-0 sm:block xsm:text-[13px] md:text-[15px]'}
                            onClick={() => dispatch(actionBasket({...item, counter: 1}))}>Добавить в корзину</button>
            )}
            <div
                className={`absolute xsm:right-2 xsm:top-0 w-1/5 flex justify-end`}>
                <img src='icons8-minus-100.webp' alt="" className={'w-5 hover:cursor-pointer'}
                     onClick={() => basket ? dispatch(actionBasket(item)) : dispatch(actionFavourite(item))}/>
            </div>
        </motion.div>
    )
}
// onClick={() => dispatch(changeCounter({...item, counter: item.counter - 1}))