import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {modalAction} from "../../store/user";

export const BurgerMenuHeader = ({setBasket,setCatalogue,setFavourite,burger,setBurger}) => {
    const basketData = useSelector(state => state.userData.basket)
    const favouriteData = useSelector(state => state.userData.favourite)
    const dispatch = useDispatch()
    return (
        <div>
            <img src="icons8-menu-100.webp" alt="" className={'w-7 h-7'} onClick={() => {
                setBurger(true)
                dispatch(modalAction(true))
            }}/>
            <motion.div className={'fixed w-screen h-screen top-0 z-50 bg-gradient-to-r from-orange-800 via-amber-700 to-amber-800 flex items-center justify-center'}
                        initial={{left: '100%'}} animate={burger ? {left: 0} : {left: '100%'}}>
                <div className="absolute right-5 top-5 flex items-center">
                    <img src="icons8-cancel-100.webp" alt="" className={'w-10 cursor-pointer'}
                         onClick={() => {
                             setBurger(false)
                             dispatch(modalAction(false))
                         }}/>
                </div>
                <ul className={'flex flex-col w-5/6 h-2/3 items-center font-bold gap-5'}>
                    <li className={'w-full bg-slate-200 rounded-xl h-1/3 flex flex-col items-center justify-center relative'} onClick={() => setCatalogue(true)}>
                        <div className="flex flex-col items-center">
                            <img src="icons8-z-fold-leaflet-100.webp" width={'27px'} alt=""/>
                            Каталог
                        </div>
                    </li>
                    <li className={'w-full bg-slate-200 rounded-xl h-1/3 flex flex-col items-center justify-center relative'} onClick={() => setBasket(true)}>
                        <div className="flex flex-col items-center">
                            <img src="icons8-basket-100.webp" alt="" width={'27px'}/>
                            Корзина
                            {basketData.length > 0 && (
                                <div
                                    className="absolute h-7 w-7 right-3 top-2 rounded-full bg-prpl flex items-center justify-center text-slate-50 text-sm">
                                    <p className={'text-[15px]'}>{basketData.length}</p>
                                </div>
                            )}
                        </div>
                    </li>
                    <li className={'w-full bg-slate-200 rounded-xl h-1/3 flex flex-col items-center justify-center relative'} onClick={() => setFavourite(true)}>
                        <div className="flex flex-col items-center">
                            <img src="icons8-heart-100.webp" alt="" width={'27px'}/>
                            Избранное
                            {favouriteData.length > 0 && (
                                <div
                                    className="absolute h-7 w-7 right-3 top-2 rounded-full bg-prpl flex items-center justify-center text-slate-50 text-sm">
                                    <p className={'text-[15px]'}>{favouriteData.length}</p>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </motion.div>
        </div>
    )
}