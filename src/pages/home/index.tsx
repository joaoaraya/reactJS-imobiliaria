import { BtnLink } from "../../components/btnLink";
import { FindHouse } from "../../components/findHouse";
import { Header } from "../../components/header";
import { Introduction } from "../../components/introduction";
import { Describle } from "../../components/describle";
import { CallOut } from "../../components/callOut";

import homeImg from "../../assets/img/home-house-img.jpg";

import './style.scss';

export function Home() {
    return (
        <div className="pageHome" style={{}}>

            <div className="homeBg" style={{ background: `linear-gradient(198.73deg, rgba(0, 0, 0, 0.01) 15.31%, rgba(0, 0, 0, 0.8) 67.37%), url(${homeImg}) no-repeat` }} />
            <Header />

            <main>
                <Introduction />
                <Describle imgPos='left' />
                <FindHouse />
                <Describle imgPos='right' />
                <CallOut />

                <>componente comentários</>
            </main>

            <>Componente footer</>
        </div>
    )
}