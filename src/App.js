import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
// Layouts
import RootLayout from './layouts/RootLayout';
import MiniProjectsLayout from './layouts/MiniProjectsLayout';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Racquets, { racquetsLoader } from './pages/racquets/Racquets';
import Contact from './pages/Contact';
import RacquetDetails, { racquetDetailsLoader } from './pages/racquets/RacquetDetails';
// Miniprojects
import Miniprojects from './pages/miniprojects/Miniprojects';
import Coinflip from './pages/miniprojects/Coinflip';
import Dice from './pages/miniprojects/Dice';
import Calculator from './pages/miniprojects/Calculator';
import GuessTheNumber from './pages/miniprojects/GuessTheNumber';
import GuessTheColor from './pages/miniprojects/GuessTheColor';

// Create my own router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <RootLayout /> }>
            <Route index element={ <Home /> }/>
            <Route path="about" element={ <About /> } />
            <Route 
                path="racquets" 
                element={ <Racquets /> }
                loader= {racquetsLoader}
            />
            <Route 
                path="racquets/:id"
                element={ <RacquetDetails /> }
                loader={ racquetDetailsLoader }
            />
            <Route path="miniprojects" element={ <MiniProjectsLayout /> }>
                <Route index element={ <Miniprojects />} />
                <Route path="coinflip" element={ <Coinflip />} />
                <Route path="dice" element={ <Dice />} />
                <Route path="calculator" element={ <Calculator />} />
                <Route path="guessthenumber" element={ <GuessTheNumber />} />
                <Route path="guessthecolor" element={ <GuessTheColor />} />
            </Route>
            <Route path="contact" element={ <Contact />} />

        </Route>
    )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}
export default App;