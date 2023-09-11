import RotationControlButton from "./reusalbe/RotationControlButton";
import { buttonData } from "./helpers/Database";

function ControlRotation({ onIsActive, onIsRotating }) {
  return (
    <div className="flex gap-4">
      {buttonData.map(([src, degree, smoothieName], i) => {
        return (
          <RotationControlButton
            key={i}
            smoothieName={smoothieName}
            onIsRotating={onIsRotating}
            src={src}
            degree={degree}
            onIsActive={onIsActive}
          />
        );
      })}
    </div>
  );
}

export default ControlRotation;
