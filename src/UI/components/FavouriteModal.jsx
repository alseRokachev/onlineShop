import {motion} from "framer-motion";
import {forwardRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllFavourite} from "../../store/user";
import {ModalItem} from "./ModalItem";

const Modal = forwardRef(
    ({closeModal,favouriteModal}, ref) => {
        const dispatch = useDispatch()
        const data = useSelector(state => state.userData.favourite)
        const basketData = useSelector(state => state.userData.basket)
        return (
            <div className={'bg-gray w-screen h-screen fixed right-0 z-50 flex flex-col justify-center items-center'}
                 ref={ref}>
                <div className="w-5/6 h-[85vh] pt-20">
                    <div className="absolute right-5 top-5 flex items-center">
                        <p className={'text-xl mr-4'}>Избранное</p>
                        <img src="icons8-cancel-100.webp" alt="" className={'w-10 cursor-pointer'}
                             onClick={() => closeModal(false)}/>
                    </div>
                    <div className="w-full h-5/6 flex flex-col gap-4 overflow-y-scroll scrollbar">
                        {data.map((item, index) => (
                            <ModalItem activeModal={favouriteModal} index={index} item={item}/>))}
                    </div>
                </div>
                <motion.button className={'justify-self-end pb-8'} onClick={() => dispatch(deleteAllFavourite())}
                               animate={data.length > 0 ? {opacity: '100%'} : {opacity: 0}}>
                    Удалить всё
                </motion.button>
                <motion.div
                    className={data.length > 0 ? 'hidden' : 'absolute top-1/2 flex flex-col items-center'}
                    animate={data.length < 1 ? {y: 0} : {y: '100%'}}>
                    <img src="icons8-empty-100.webp" alt="" className={'w-16'}/>
                    <p className={'w-full text-center font-bold'}>Нет избранных</p>
                </motion.div>
            </div>
        )
    }
)

export const FavouriteModal = motion(Modal)