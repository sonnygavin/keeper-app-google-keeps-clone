import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((cardItem) => (
        <Note
          key={cardItem.key}
          title={cardItem.title}
          content={cardItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
