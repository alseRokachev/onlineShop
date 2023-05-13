import {useState} from "react";
import {ItemSearch} from "./ItemSearch";

const Admin = () => {
    const [search, setSearch] = useState()
    return (
        <div className={'w-screen h-[75vh] items-center'}>
            <div className="md:justify-between xsm:justify-center flex mt-8">
                <div className="bg-gray flex items-center justify-center w-fit px-5 text-center"
                     onClick={() => setSearch(1)}>Добавить товар
                </div>
                <div className="bg-gray flex items-center justify-center px-5 text-center"
                     onClick={() => setSearch(2)}>Удалить товар
                </div>
                <div className="bg-gray flex items-center justify-center px-5 text-center"
                     onClick={() => setSearch(3)}>Изменить товар
                </div>
            </div>
            {search && (
                <ItemSearch actionType={search}/>
            )}
        </div>
    )
}

export default Admin