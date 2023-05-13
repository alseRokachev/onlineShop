import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Payment = () => {
	const navigate = useNavigate()
	const data = useSelector(state => state.userData.basket)
	return (
		<div className={'absolute w-screen h-[100.1vh] bg-lagoone flex flex-col items-center'}>
			<img src="icons8-cancel-100.webp" alt="" className={'w-10 ml-auto mr-7 mt-5 hover:cursor-pointer'} onClick={() => navigate('/')}/>
			<p className={'text-xl w-5/6 mt-5 text-center'}>Выберите способ оплаты</p>
			<b className={'w-5/6 mt-5 text-center'}>К оплате : {data.reduce((a,b) => a + b.price * b.counter,0)} Руб</b>
			<div className="w-full h-full flex items-center flex-col">
				<div className="w-5/6 max-w-[400px] h-fit min-h-[120px] bg-transparent border-2 border-prpl flex items-center rounded-xl mt-10 text-prpl">
					<div className="w-full flex flex-col items-center justify-center">
						<img src="icons8-cash-100.webp" alt="" className={'w-1/4 max-w-[140px]'}/>
						<p>Наличные</p>
					</div>
				</div>
				<div className="w-5/6 max-w-[400px] h-fit min-h-[120px] bg-transparent border-2 border-prpl flex items-center rounded-xl text-prpl mt-6">
					<div className="w-full flex flex-col items-center justify-center">
						<img src="icons8-card-100.webp" alt="" className={'w-1/4 max-w-[140px]'}/>
						<p>Карта</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Payment