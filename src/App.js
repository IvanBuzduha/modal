import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">Modal App</header>
      <main>
        <button onClick ={()=>setOpen(true)} className="open-modal-btn"> Open modal</button>
        
        {/* {open&&<Modal open={open }setOpen={setOpen} />}  */}
      {/* <Modal open={open }setOpen={setOpen} /> */}
      <Modal open={open }setOpen={setOpen}>
        <p>Some information</p>
        </Modal>

     
      </main>
    </div>
  );
}

export default App;
