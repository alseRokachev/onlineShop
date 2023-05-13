import {useSelector} from "react-redux";
import {MProductCard} from "./components/ProductCard";
import {useEffect, useMemo, useState} from "react";
import {motion} from "framer-motion";

const productAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const filterAnimation = {
    hidden: {
        height: 0,
        zIndex: 10,
    },
    visible: {
        height: 108,
        zIndex: 40,
        opacity: 1
    }
}
const Search = () => {
    const searchValue = useSelector(state => state.searchData.value)
    const data = useSelector(state => state.goodsData.goodsData)
    const [filter, setFilter] = useState(false)
    const [filterName, setFilterName] = useState('')
    const [searchResult, setSearchResult] = useState(data)

    const filterMemoDecrease = useMemo(() => {
        return data.filter(item => item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())).sort((a, b) => a.price - b.price)
    }, [filterName, searchValue])
    const filterMemoIncrease = useMemo(() => {
        return data.filter(item => item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())).sort((a, b) => b.price - a.price)
    }, [filterName, searchValue])


    useEffect(() => {
            if (filterName == '') {
                setSearchResult(data.filter(item => item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())))
            }
            if (filterName == 'цене (возрастание)') {
                setSearchResult(filterMemoDecrease)
            }
            if (filterName == 'цене (убывание)') {
                setSearchResult(filterMemoIncrease)
            }
        }, [filterName, searchValue]
    )

    return (
        <div className={'w-full px-2 relative'}>
            <div className={'my-4 text-xl w-fit flex flex-col justify-center'}>
                <p>Фильтровать по</p>
                <div className="flex items-center">
                    <div
                        className={`bg-prpl px-3 rounded-full min-w-[27px] text-slate-50 flex items-center w-fit h-7 mr-1 text-[15px] justify-center cursor-pointer`}
                        onClick={() => setFilter(!filter)}>{filterName || <p className={'text-xl'}>+</p>}
                    </div>
                    <motion.div className="cursor-pointer" initial={{opacity: 0}}
                                animate={filterName === '' ? {scale: 0} : {scale: 1, opacity : 1}} transition={{duration: 0.3}}>
                        <img src="icons8-delete-100.webp" alt="" className={'w-8'} onClick={() => {
                            setFilterName('')
                            setFilter(false)
                        }}/>
                    </motion.div>
                </div>
            </div>
            <div className={`${window.innerWidth > 740 ? 'justify-between' : 'justify-center'} w-full flex flex-wrap gap-4`}>
                {searchResult.map((item, index) => <MProductCard product={item}
                                                                 key={index}
                                                                 initial="hidden"
                                                                 variants={productAnimation}
                                                                 animate="visible"
                                                                 custom={index}
                                                                 viewport={{amount: 0.5}}/>)}
            </div>
            <motion.div className="bg-prpl absolute top-24 w-64 left-2" initial={{opacity: 0}}
                        animate={filter ? "visible" : "hidden"}
                        variants={filterAnimation}>
                <motion.ul className={`w-full h-full text-slate-50 flex-col justify-evenly px-2 hover:cursor-pointer`}
                           animate={filter ? {display: 'flex', opacity: 1} : {
                               display: 'none',
                               opacity: 0
                           }}>
                    <li onClick={() => {
                        setFilterName('цене (убывание)')
                        setFilter(false)
                    }} className={'h-full flex items-center'}>цене (убывание)
                    </li>
                    <hr/>
                    <li onClick={() => {
                        setFilterName('цене (возрастание)')
                        setFilter(false)
                    }} className={'h-full flex items-center'}>цене (возрастание)
                    </li>
                </motion.ul>
            </motion.div>
            <motion.div className="w-full h-full flex justify-center"
                        animate={searchResult.length < 1 ? {opacity: 1, zIndex: 40} : {opacity: 0, zIndex: -10}}>
                <p>Ничего не найдено</p>
            </motion.div>
        </div>
    )
}


export default Search