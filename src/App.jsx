import { useState } from "react";
import ControlRotation from "./components/ControlRotation";
import RotatingComponents from "./components/RotatingComponents";
import Overlay from "./components/Overlay";
import Background from "./components/Background";

function App() {
  const [isRotating, setIsRotating] = useState(0);
  const [isActive, setIsActive] = useState("red");

  return (
    <div className="w-screen h-screen bg-stone-400 relative overflow-hidden">
      <Background isActive={isActive} />
      <Overlay isActive={isActive}>
        <RotatingComponents isActive={isActive} isRotating={isRotating} />
        <ControlRotation
          onIsActive={setIsActive}
          onIsRotating={setIsRotating}
        />
      </Overlay>
    </div>
  );
}

export default App;
