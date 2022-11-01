import {Works, Welcome, Recipes, Meals, Hero, Footer} from '../../components';

function Home() {
    return (
        <div>
            <Hero />
            <Works/>
            <Welcome/>
            <Recipes/>
            <Meals/>
            <Footer />
        </div>
    )
}

export default Home;
