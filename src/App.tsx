// SPLITSCREEN PATTERN
//
// import { Left } from './components/SplitscreenPattern/Left';
// import { Right } from './components/SplitscreenPattern/Right';
// import { SplitScreen } from './components/SplitscreenPattern/SplitScreen';

import GamesInfo from './components/ListPattern/GamesInfo';
import MoviesInfo from './components/ListPattern/MoviesInfo';
import RenderList from './components/ListPattern/RenderList';
import { games } from './data/ListPattern/games';
import { movies } from './data/ListPattern/movies';

const App = () => {
    return (
        <>
            {/* <SplitScreen leftWeight={15} rightWeight={80}>
                // <Left />
                // <Right />
                //{' '}
            </SplitScreen> */}

            <RenderList
                data={games}
                resourceName={'games'}
                dataToRender={GamesInfo}
            />
            <hr />
            <br />
            <br />
            <RenderList
                data={movies}
                resourceName={'movies'}
                dataToRender={MoviesInfo}
            />
        </>
    );
};

export default App;
