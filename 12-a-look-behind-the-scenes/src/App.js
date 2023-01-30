import './App.css';
import {useState, useCallback, useMemo} from "react";
import Button from "./components/UI/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);
    const [listTitle, setListTitle] = useState('My list');

    console.log('App running');
    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };
    const changeTitleHandler = useCallback(() => {
        setListTitle('New Title');
    }, []);

    const listItems = useMemo(()=> [5, 3, 1, 10, 9], []);
    return (<>
            <div className="App">
                <h1> Hi There!</h1>
                <DemoOutput show={showParagraph}/>
                <Button onClick={allowToggleHandler}>Allow toggling</Button>
                <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
            </div>
            <div className="App">
                <h1> UseMemo Optimization</h1>
                <DemoList title={listTitle} items={listItems}/>
                <Button onClick={changeTitleHandler}>Change List Title </Button>
            </div>
        </>
    );
}

export default App;
