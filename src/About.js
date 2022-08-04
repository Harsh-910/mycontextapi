import { useContext, useEffect } from "react";
import NoteContext from "./context/notes/NoteContext";

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    console.log(a);
    a.update();
  }, []);
  return <>Hello{a.state.name}</>;
};

export default About;
