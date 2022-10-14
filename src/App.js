import Navbar from "./Navbar";
import Mustwatch from "./Mustwatch";
import Section from "./Section";
const App = () => {
    return (
        <>
           <Navbar/>
           <Mustwatch/>
           <Section data={8221705} title="TOP THRILLER MOVIES"/>
           <Section data={8221723} title="TOP COMEDY MOVIES"/>
           <Section data={8222141} title="BEST ANIMATED MOVIES"/>
           <Section data={8222144} title="BEST FEEL GOOD MOVIES "/>
           
        </>
    )
}
export default App;