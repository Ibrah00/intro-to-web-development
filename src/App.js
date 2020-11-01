import logo from './logo.svg';
import './App.css';
import Design from './Components/Design';
import DesignPad from './Components/DesignPad';
import padInput from './Components/padInput';

function App() {
  return (
    <div className="App">
      <Design />
    <main class="board11">
      <DesignPad id="board1" class="board">
        <padInput id="board1" class="board" draggable="true">
            <p>Number 1</p>
        </padInput>
      </DesignPad>

      <DesignPad id="board2" class="board">
        <padInput id="board2" class="board" draggable="true">
            <p>Number 2</p>
        </padInput> 
      </DesignPad>

      <DesignPad id="board3" class="board">
        <padInput id="board3" class="board" draggable="true">
            <p>Number 3</p>
        </padInput> 
      </DesignPad>

      <DesignPad id="board4" class="board">
        <padInput id="board4" class="board" draggable="true">
            <p>Number 4</p>
        </padInput> 
      </DesignPad>
      </main>
    </div>
  );
}

export default App;
