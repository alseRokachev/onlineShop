import {useState} from "react";
import {FavouriteModal} from "./FavouriteModal";
import {BasketModal} from "./BasketModal";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {changeValue} from "../../store/search";
import {Catalogue} from "./Catalogue";
import {modalAction} from "../../store/user";
export const Header = () => {
    const [favouriteModal, setFavouriteModal] = useState(false)
    const [basketModal, setBasketModal] = useState(false)
    const [catalogueModal, setCatalogueModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const basketData = useSelector(state => state.userData.basket)
    const favouriteData = useSelector(state => state.userData.favourite)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className={`md:w-screen h-full xsm:w-full xsm:h-full w-full text-prpl flex lg:px-8`}
             id={'header'}>
            <div
                className={`md:w-1/2 md:justify-between md:flex-row xsm:w-full xsm:flex-col xsm:justify-evenly h-full flex items-center justify-between font-extrabold`}>
                <div className={`xsm:w-5/6 xsm:justify-center md:w-1/4 md:justify-start md:pl-4 flex items-center`}>
                    <p className={'hover:cursor-pointer'} onClick={() => navigate('/onlineShop')}>Минимаркет</p>
                </div>
                <div className={`md:w-4/6 xsm:w-5/6 md:h-9 xsm:h-8 relative flex items-center`}>
                    <input type="text" value={searchValue}
                           className={'w-full h-full border border-prpl font-medium rounded-xl outline-none px-4 md:text-[15px] xsm:text-sm'}
                           onFocus={() => navigate('/search')} placeholder={'Искать'}
                           onInput={(event) => {
                               setSearchValue(event.currentTarget.value)
                               dispatch(changeValue(event.currentTarget.value))
                           }}/>
                    <img src="icons8-delete-100.webp" alt="" className={'absolute right-0 w-7 hover:cursor-pointer'}
                         onClick={() => {
                             setSearchValue('')
                             dispatch(changeValue(''))
                         }}/>
                </div>
            </div>
            <nav className="xsm:w-full xsm:bg-prpl xsm:rounded-t-xl md:rounded-none  md:bg-transparent md:w-1/2 xsm:h-[55px] md:h-full md:static xsm:fixed bottom-0 flex items-center z-50">
                <ul className={'flex w-full h-full md:h-full font-bold xsm:text-slate-50 md:text-black'}>
                    <li className={'w-1/3 flex flex-col items-center justify-center xsm:text-[13px] md:text-[15px]'}>
                        <div className="flex flex-col items-center cursor-pointer relative"
                             onClick={() => {
                                 setCatalogueModal(true)
                                 dispatch(modalAction(true))
                             }}>
                            <img src="icons8-z-fold-leaflet-100.webp" width={'27px'} alt=""/>
                            Каталог
                        </div>
                    </li>
                    <li className={'w-1/3 h-full md:h-full flex flex-col items-center justify-center xsm:text-[13px] md:text-[15px]'}>
                        <div className="flex flex-col items-center cursor-pointer relative"
                             onClick={() => {
                                 setBasketModal(true)
                                 dispatch(modalAction(true))
                             }}>
                            <img src="icons8-basket-100.webp" alt="" width={'27px'}/>
                            Корзина
                            {basketData.length > 0 && (
                                <div
                                    className="absolute h-5 w-5 right-0 -top-1 rounded-full bg-prpl flex items-center justify-center text-slate-50 text-sm">
                                    <p>{basketData.length}</p>
                                </div>
                            )}
                        </div>
                    </li>
                    <li className={'w-1/3 h-full md:h-full flex flex-col items-center justify-center xsm:text-[13px] md:text-[15px]'}>
                        <div className="flex flex-col items-center cursor-pointer relative"
                             onClick={() => {
                                 setFavouriteModal(true)
                                 dispatch(modalAction(true))
                             }}>
                            <img src="icons8-heart-100.webp" alt="" width={'27px'}/>
                            Избранное
                            {favouriteData.length > 0 && (
                                <div
                                    className="absolute h-5 w-5 right-0 -top-1 rounded-full bg-prpl flex items-center justify-center text-slate-50 text-sm">
                                    <p>{favouriteData.length}</p>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </nav>
            <FavouriteModal closeModal={setFavouriteModal} favouriteModal={favouriteModal}
                            initial={window.innerWidth > 740 ? {top: '-100vh', borderRadius: '100vh'} : {top: '-100vh'}}
                            animate={favouriteModal ? {top: 0, borderRadius: 0} : {
                                top: '-100vh'
                            }}
                            transition={{duration: 0.4}}/>
            <BasketModal closeModal={setBasketModal} basketModal={basketModal}
                         initial={window.innerWidth > 740 ? {top: '-100vh', borderRadius: '100%'} : {top: '-100vh'}}
                         animate={basketModal ? {top: 0, borderRadius: 0} : {
                             top: '-100vh'
                         }}
                         transition={{duration: 0.4}}/>
            <Catalogue closeModal={setCatalogueModal} catalogueModal = {catalogueModal}
                       initial={{top: '-100vh'}}
                       animate={catalogueModal ? {top: 0} : {
                           top: '-100vh'
                       }}
                       transition={{duration: 0.3}}/>
        </div>
    )
}