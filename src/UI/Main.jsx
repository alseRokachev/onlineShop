import {IntroCarousel} from "./components/IntroCarousel";
import {ProductsPromotion} from "./components/ProductsPromotion";
import {Categories} from "./components/Categories";

export const Main = () => {
    return (
        <div className={'w-full'}>
            <IntroCarousel/>
            <Categories/>
            <ProductsPromotion/>
        </div>
    )
}