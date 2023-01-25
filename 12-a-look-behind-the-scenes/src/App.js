import './App.css';
import {useState, useCallback} from "react";
import Button from "./components/UI/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('App running');
    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };
    return (
        <div className="App">
            <h1> Hi There!</h1>
            <DemoOutput show={showParagraph}/>
            <Button onClick={allowToggleHandler}>Allow toggling</Button>

            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
