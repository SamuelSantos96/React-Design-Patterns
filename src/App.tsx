// SPLITSCREEN PATTERN
//
// import { Left } from './components/SplitscreenPattern/Left';
// import { Right } from './components/SplitscreenPattern/Right';
// import { SplitScreen } from './components/SplitscreenPattern/SplitScreen';

// LIST PATTERN
//
// import GamesInfo from './components/ListPattern/GamesInfo';
// import MoviesInfo from './components/ListPattern/MoviesInfo';
// import RenderList from './components/ListPattern/RenderList';
// import { games } from './data/ListPattern/games';
// import { movies } from './data/ListPattern/movies';

// MODAL
// import GamesInfo from './components/Modal/GamesInfo';
// import { Modal } from './components/Modal/Modal';
// import { games } from './data/Modal/games';

// CONTAINER
import { TodoList } from './components/Container/TodoList';
import SingleTodoLoader from './shared/Container/SingleTodoLoader';

const App = () => {
    return (
        <>
            {/* SPLITSCREEN PATTERN */}
            {/* <SplitScreen leftWeight={15} rightWeight={80}>
                // <Left />
                // <Right />
                //{' '}
            </SplitScreen> */}

            {/* LIST PATTERN */}
            {/* <RenderList
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
            /> */}

            {/* MODAL */}
            {/* <Modal>
                <GamesInfo data={games}></GamesInfo>
            </Modal> */}
            <SingleTodoLoader>
                <TodoList></TodoList>
            </SingleTodoLoader>
        </>
    );
};

export default App;
