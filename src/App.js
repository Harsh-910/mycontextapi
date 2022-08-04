import NoteState from "./context/notes/NoteState";
import "./styles.css";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <NoteState>
        <About />
      </NoteState>
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
