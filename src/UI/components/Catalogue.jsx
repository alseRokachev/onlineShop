import {motion} from "framer-motion";
import {forwardRef, useState} from "react";
import {useSelector} from "react-redux";

export const Modal = forwardRef(({closeModal, catalogueModal}, ref) => {
    const data = useSelector(state => state.goodsData.goodsCategories)
    const [categoryITemList, setCategoryITemList] = useState({})
    return (
        <div className={'bg-gray w-screen h-screen fixed right-0 z-50 flex flex-col justify-center items-center'}
             ref={ref}>
            <motion.div className="absolute right-5 top-5 flex items-center">
                <p className={'text-xl mr-4'}>Каталог</p>
                <img src="icons8-cancel-100.webp" alt="" className={'w-10 cursor-pointer'}
                     onClick={() => closeModal(false)}/>
            </motion.div>
            <div
                className={`${window.innerWidth > 740 ? '' : 'justify-start'} h-[75vh] w-5/6 flex items-center hover:cursor-pointer relative`}>
                <ul className={'h-full rounded-xl bg-lagoone xsm:w-[85vw] md:min-w-[310px] flex flex-col px-4 overflow-y-scroll scrollbar'}>
                    <p className={'h-12 flex items-center font-bold py-4'}>Категории</p>
                    {data.map(item => (
                        <div key={item.name}>
                            <hr/>
                            <li className={'h-12 flex items-center'}
                                onClick={() => setCategoryITemList(item)}>{item.name}</li>
                        </div>
                    ))}
                </ul>
                <motion.ul
                    className={'absolute left-0 rounded-xl h-full bg-lagoone xsm:w-[85vw] md:min-w-[310px] flex flex-col px-4 overflow-y-scroll scrollbar'}
                    initial={{left: 0}}
                    animate={window.innerWidth > 740 ?
                        categoryITemList.name ? {left: '320px', zIndex: 40} : {left: 0, zIndex: -10} :
                        categoryITemList.name ? {zIndex: 40} : {zIndex: -10}}>
                    <p className={'h-12 flex items-center font-bold'}>{categoryITemList.name}</p>
                    {categoryITemList.list?.map(item => (
                        <div>
                            <hr/>
                            <li className={'h-12 flex items-center'}>{item}</li>
                        </div>
                    ))}
                    <img src="icons8-back-circle-100.webp" alt="" className={'w-10 h-10 absolute left-5 bottom-5'}
                         onClick={() => setCategoryITemList({})}
                    />
                </motion.ul>
            </div>
        </div>
    )
})

export const Catalogue = motion(Modal)