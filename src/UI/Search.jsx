import {useSelector} from "react-redux";
import {MProductCard} from "./components/ProductCard";
import {useEffect, useMemo, useState} from "react";
import {motion} from "framer-motion";
import axios from "axios";

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
    const data = useSelector(state => state.goodsData.goodsData)
    const searchValue = useSelector(state => state.searchData.value)
    const [filter, setFilter] = useState(false)
    const [filterName, setFilterName] = useState('')
    const [searchResult, setSearchResult] = useState(data)

    const filterMemoDecrease = useMemo(() => {
        return data.filter(item => item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())).sort((a, b) => a.price - b.price)
    }, [filterName, searchValue])
    const filterMemoIncrease = useMemo(() => {
        return data.filter(item => item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())).sort((a, b) => b.price - a.price)
    }, [filterName, searchValue])
    const filterMemoAlpabet = useMemo(() => {
        return data.filter(item => item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())).sort((prev, next) => {
            if (prev.name < next.name) return -1;
        });
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
            if (filterName == 'алфавиту') {
                setSearchResult(filterMemoAlpabet)
            }
        }, [filterName, searchValue]
    )

    return (
        <div className={'w-full px-2 relative min-h-[85vh]'}>
            <div className={'my-4 text-xl w-fit flex flex-col justify-center'}>
                <p className={'md:text-lg sm:text-sm xsm:text-[15px]'}>Фильтровать по</p>
                <div className="flex items-center">
                    <div
                        className={`bg-gradient-to-r from-amber-800 via-amber-700 to-orange-800 ${filterName !== '' ? 'px-3' : ''} md:h-6 xsm:h-5 rounded-full min-w-[27px] text-slate-50 flex items-center w-fit mr-1 text-[15px] justify-center cursor-pointer md:text-[15px] sm:text-sm xsm:text-[11px]`}
                        onClick={() => setFilter(!filter)}>{filterName || <p>+</p>}
                    </div>
                    <motion.div className="cursor-pointer" initial={{opacity: 0}}
                                animate={filterName === '' ? {scale: 0} : {scale: 1, opacity: 1}}
                                transition={{duration: 0.3}}>
                        <img src="icons8-delete-100.webp" alt="" className={'w-8'} onClick={() => {
                            setFilterName('')
                            setFilter(false)
                        }}/>
                    </motion.div>
                </div>
            </div>
            <div className={`xsm:justify-between sm:justify-evenly lg:justify-between w-full flex flex-wrap gap-4`}>
                {searchResult.map((item, index) => <MProductCard product={item}
                                                                 key={index}
                                                                 initial="hidden"
                                                                 variants={productAnimation}
                                                                 animate="visible"
                                                                 custom={index}
                                                                 viewport={{amount: 0.5}}/>)}
            </div>
            <motion.div className="rounded-xl absolute top-[75px] md:w-64 xsm:w-44 left-2" initial={{opacity: 0}}
                        animate={filter ? "visible" : "hidden"}
                        variants={filterAnimation}>
                <motion.ul
                    className={`w-full md:text-[15px] xsm:text-[14px] rounded-xl h-full bg-gradient-to-r from-amber-800 to-orange-800 text-slate-50 flex-col justify-evenly px-2 hover:cursor-pointer`}
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
                    <hr/>
                    <li onClick={() => {
                        setFilterName('алфавиту')
                        setFilter(false)
                    }} className={'h-full flex items-center'}>алфавиту
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