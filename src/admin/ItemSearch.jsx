import {useSelector} from "react-redux";
import {useState} from "react";

export const ItemSearch = ({actionType}) => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className={'h-full py-10 w-full'}>
            {actionType === 1 && (<p>Добавить</p>)}
            {actionType === 2 && (<p>Удалить</p>)}
            {actionType === 3 && (<p>Изменить</p>)}
            <div className="w-full relative">
                <input type="text" placeholder={'Введите название товара'} className={'w-full border-2 p-2'}
                       value={searchValue}
                       onInput={(event) => setSearchValue(event.currentTarget.value)}/>
                <img src="icons8-delete-100.webp" alt="" className={'absolute right-0 top-0 h-11'} onClick={() => setSearchValue('')}/>
            </div>
        </div>
    )
}