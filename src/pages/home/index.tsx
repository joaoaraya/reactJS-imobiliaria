import { FindHouse } from "../../components/findHouse";
import { Header } from "../../components/header";
import { Link } from "../../components/link";

export function Home() {
    return (
        <div className="pageHome" style={{ backgroundColor: 'rgb(255, 204, 200)' }}>
            <Header />
            <h1>Bealtiful home made for you</h1>
            <p>In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
            <div>
                <Link txt="See all listings" />
            </div>

            <>componente (left, right)</>

            <FindHouse />

            <>componente (left, right)</>

            <div>
                <div />
                <h1>You’re in good hands</h1>
                <p>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                <Link txt="Learn more" />
            </div>

            <>componente comentários</>

            <>Componente rodapé</>

        </div>
    )
}