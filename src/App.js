import './App.css';
import {Main} from "./UI/Main";
import {Header} from "./UI/components/Header";
import {Route, Routes} from "react-router-dom";
import {lazy, Suspense, useState} from "react";
import {LoadingAnimation} from "./UI/components/LoadingAnimation";
import {ScrollToTopBtn} from "./UI/components/ScrollToTopBtn";
import {Footer} from "./UI/components/Footer";
import {useSelector} from "react-redux";

const Search = lazy(() => import("./UI/Search"));
const Payment = lazy(() => import("./UI/Payment"));
const Admin = lazy(() => import("./admin/Admin"))

function App() {
    const [scrollHeight, setScrollHeight] = useState(0)
    const modal = useSelector(state => state.userData.activeModal)
    window.onscroll = () => {
        setScrollHeight(window.scrollY)
    };
    return (
        <div className="App bg-[] min-h-screen flex flex-col overflow-x-hidden relative">
            <div className={`md:h-16 xsm:h-[100px] mb-3 w-full`}>
                <Header/>
            </div>
            <div className="md:container xsm:w-screen w-full h-full flex justify-center items-center">
                <Suspense fallback={<LoadingAnimation/>}>
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route path={'/search'} element={<Search/>}/>
                        <Route path={'/admin'} element={<Admin/>}/>
                    </Routes>
                </Suspense>
            </div>
            {!modal && (
                <ScrollToTopBtn initial={{y: '200%', opacity: 0}}
                                animate={scrollHeight > window.screen.height / 4 ? {y: 0, opacity: 1} : {y: '150%'}}
                                transition={{duration: 0.7, type: 'spring'}}/>
            )}
            <Suspense fallback={<LoadingAnimation/>}>
                <Routes>
                    <Route path={'/pay'} element={<Payment/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default App;
