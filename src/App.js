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

function App() {
    const [scrollHeight, setScrollHeight] = useState(0)
    const modal = useSelector(state => state.userData.activeModal)
    window.onscroll = () => {
        setScrollHeight(window.scrollY)
    };
    return (
        <div className="App bg-slate-100 min-h-screen flex flex-col overflow-x-hidden relative">
            <div className={`md:h-16 xsm:h-[80px] lg:mb-3 w-full shadow-md`}>
                <Header/>
            </div>
            <div className="lg:container xsm:w-screen w-full h-fit flex justify-center items-center">
                <Suspense fallback={<LoadingAnimation/>}>
                    <Routes>
                        <Route path={'/onlineShop'} element={<Main/>}/>
                        <Route path={'/search'} element={<Search/>}/>
                    </Routes>
                </Suspense>
            </div>
            {!modal && (
                <ScrollToTopBtn initial={{y: '200%', opacity: 0}}
                                animate={scrollHeight > window.screen.height / 4 ? {y: 0, opacity: 1} : {y: '150%'}}
                                transition={{duration: 0.7, type: 'spring'}}/>
            )}
            <Footer/>
        </div>
    );
}

export default App;
