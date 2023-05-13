import {useSelector} from "react-redux";
import {Catalogue} from "./Catalogue";
import {useEffect, useState} from "react";

export const Categories = () => {
    const data = useSelector(state => state.goodsData.goodsCategories)
    const [catalogueModal, setCatalogueModal] = useState(false)
    const [limit, setLimit] = useState(5)
    useEffect(() => window.innerWidth < 768 ? setLimit(5) : setLimit(data.length), [])
    return (
        <div className={'w-full h-fit mt-6 px-2'}>
            <p className={'text-2xl'}>Категории</p>
            <div className="flex flex-wrap gap-[1vw] mt-4 justify-between">
                {data.map((item, index) => (
                    index < limit ?
                        <button key={item.name}
                                className={`xsm:mb-2 md:mb-0  min-w-[20px] w-fit h-fit rounded-xl bg-lagoone px-3 py-0.5 hover:bg-gray duration-500`}>
                            {item.name}
                        </button> :
                        ''
                ))}
            </div>
            {window.innerWidth < 768 ?
                <button className={`mt-5`}
                        onClick={() => {
                            setLimit(data.length === limit ? 5 : data.length)
                        }}>{limit === data.length ? <span>Скрыть</span> : <span>Больше...</span>}
                </button>
                : ''
            }
            <Catalogue closeModal={setCatalogueModal}
                       initial={{opacity: 0}}
                       animate={catalogueModal ? {top: 0, opacity: 1} : {
                           top: '-100%'
                       }}
                       transition={{duration: 0.4}}/>
        </div>
    )
}