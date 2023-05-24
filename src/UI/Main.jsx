import {IntroCarousel} from "./components/IntroCarousel";
import {CategoriesCarousel} from "./components/CategoriesCarousel";

export const Main = () => {
    return (
        <div className={'w-full min-h-[85vh] mb-20'}>
            <IntroCarousel/>
            <CategoriesCarousel/>
        </div>
    )
}