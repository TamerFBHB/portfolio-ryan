
import ShowPage from '@/pages/ShowPage/ShowPage';
import style from './page.module.scss'
import Particule from '@/Component/Particule';


const Home = () => {

    return (
        <div className={style.mainPage}>
            <div className={style.container}>
                <Particule />
                <ShowPage />
            </div>
        </div>
    );
}

export default Home;
