import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const Footer = () => {
    const navigate = useNavigate()
    const adminPass = useSelector(state => state.adminData.pass)
    return (
        <div
            className={`${window.innerWidth > 740 ? 'flex-row' : 'flex-col justify-evenly'} flex w-screen h-[200px] bg-prpl text-slate-50 mt-8 px-4`}>
            <div
                className={`${window.innerWidth > 740 ? 'w-1/2 h-full' : 'w-full h-1/3'} flex flex-row justify-evenly items-center text-[13px] flex-wrap gap-10`}>
                <p>Помощь</p>
                <p>Защита прав потребителя</p>
                <p onClick={() => {
                    let pass = prompt()
                    pass === adminPass ? navigate('/admin') : alert('Неверный пароль')
                }}>Администрирование</p>
                <p>Контакты</p>
            </div>
            <div
                className={`${window.innerWidth > 740 ? 'w-1/2' : 'w-full items-center h-1/3'} flex items-center justify-center`}>
                <p>Минимаркет &copy;</p>
            </div>
        </div>
    )
}