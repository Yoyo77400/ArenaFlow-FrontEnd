import "../../styles/Loader.css";

export function Loader() {
  return (
    <div className="arena-loader">
      <div className="stadium-door left-door">
        <div className="led-strip left"></div>
      </div>

      <div className="stadium-door right-door">
        <div className="led-strip right"></div>
      </div>

      <div className="center-light"></div>

      <div className="arena-loader-logo">ArenaFlow</div>
    </div>
  );
}
