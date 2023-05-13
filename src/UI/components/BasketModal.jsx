import {forwardRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllBasket} from "../../store/user";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {ModalItem} from "./ModalItem";

export const Modal = forwardRef(
    ({closeModal, basketModal, setBurger}, ref) => {
        const dispatch = useDispatch()
        const data = useSelector(state => state.userData.basket)
        const navigate = useNavigate()
        return (
            <div className={'bg-gray w-screen h-screen fixed right-0 z-50 flex flex-col justify-center items-center'}
                 ref={ref}>
                <div className={`w-5/6 h-[80vh] ${window.innerWidth > 740 ? 'pt-20' : 'pt-24 pb-7'}`}>
                    <div className="absolute right-5 top-5 flex items-center">
                        <p className={'text-xl mr-4'}>Корзина</p>
                        <img src="icons8-cancel-100.webp" alt="" className={'w-10 cursor-pointer'}
                             onClick={() => closeModal(false)}/>
                    </div>
                    <div
                        className={`w-full ${window.innerWidth > 740 ? 'h-5/6' : 'h-full'} flex flex-col gap-4 overflow-y-scroll scrollbar`}>
                        {data.map((item, index) => (
                            <ModalItem activeModal={basketModal} index={index} item={item} basket/>
                        ))}
                    </div>
                </div>
                <div className="sm:w-5/6 sm:px-0 xsm:px-2 xsm:w-full flex flex-col items-center">
                    <motion.div
                        className={`lg:px-6 xsm:px-2 rounded-xl justify-between w-full h-16 bg-prpl flex flex-row items-center mb-4 text-slate-50`}
                        initial={{width: 0}}
                        animate={basketModal && data.length > 0 ? {opacity: '100%', width: '100%'} : {opacity: 0}}>
                        <div className={`md:w-5/6 sm:w-4/5 xsm:w-1/2 xsm:justify-center flex `}>
                            <div className={`lg:w-2/6 xsm:w-full xsm:text-[13px] sm:text-[15px] text-center`}>
                                <p className={'w-full'}>Общая стоимость : {window.innerWidth > 768 ? '' : <br/>} {data.reduce((sum, item) => sum += item.price * item.counter, 0)} Руб</p>
                            </div>
                            <div className={`lg:block xsm:hidden w-2/6 text-center`}>
                                <p>Наименований :{window.innerWidth > 1026 ? '' : <br/>} {data.length}</p>
                            </div>
                            <div className={`lg:block xsm:hidden w-2/6 text-center`}>
                                <p>Всего позиций :{window.innerWidth > 1026 ? '' :
                                    <br/>} {data.reduce((sum, item) => sum += item.counter, 0)} шт</p>
                            </div>
                        </div>
                        <div
                            className={`lg:w-1/5 sm:w-1/3 xsm:w-1/2 h-full flex justify-end items-center`}>
                            <button
                                className={`lg:px-6 sm:px-2 w-full bg-lagoone rounded-xl text-prpl xsm:text-[13px] md:text-[14px] h-3/5 hover:bg-slate-300 duration-500`}
                                onClick={() => {
                                    navigate('/pay')
                                    closeModal(false)
                                    setBurger(false)
                                }}>
                                Сделать
                                заказ
                            </button>
                        </div>
                    </motion.div>
                    <motion.button className={'pb-4 md:text-[15px] xsm:text-sm'} onClick={() => dispatch(deleteAllBasket())}
                                   animate={data.length > 0 ? {opacity: '100%'} : {opacity: 0}}>
                        Удалить всё
                    </motion.button>
                </div>
                <motion.div
                    className={data.length > 0 ? 'hidden' : 'absolute top-1/2 flex flex-col items-center'}
                    animate={data.length < 1 ? {y: 0} : {y: '100%'}}>
                    <img src="icons8-empty-100.webp" alt="" className={'w-16'}/>
                    <p className={'w-full text-center font-bold'}>Корзина пуста</p>
                </motion.div>
            </div>
        )
    }
)

export const BasketModal = motion(Modal)