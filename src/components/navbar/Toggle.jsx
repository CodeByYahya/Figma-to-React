import "./toggle.css";
function Toggle({ onToggle }) {
  return (
    <div>
      <div>
        <label className="switch">
          <input type="checkbox" onClick={onToggle} />
          <span className="slider" />
        </label>
      </div>
    </div>
  );
}

export default Toggle;
