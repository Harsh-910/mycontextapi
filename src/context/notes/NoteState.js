import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    name: "harsh",
    class: "11"
  };
  // const s1 = "hellos1";

  const [state, Setstate] = useState(s1);

  const update = () => {
    setTimeout(() => {
      Setstate({
        name: "harsh11",
        class: "11"
      });
    });
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
