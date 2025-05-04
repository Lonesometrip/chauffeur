import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress, item } = useProgress();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "rgba(0, 0, 0, 0.7)",
    padding: "20px",
    borderRadius: "10px",
    backdropFilter: "blur(5px)",
  };

  const textStyle = {
    fontSize: 16,
    color: "#F1F1F1",
    fontWeight: 800,
    marginTop: 20,
  };

  const progressBarContainerStyle = {
    width: "200px",
    height: "10px",
    backgroundColor: "#333",
    borderRadius: "5px",
    marginTop: "10px",
  };

  const progressBarStyle = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#D4AF37", // Gold color to match theme
    borderRadius: "5px",
    transition: "width 0.3s ease-in-out",
  };

  const loadingItemStyle = {
    fontSize: 12,
    color: "#aaa",
    marginTop: 5,
    maxWidth: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  return (
    <Html as="div" center style={containerStyle}>
      <h3 style={{ color: "#D4AF37", margin: "0 0 10px 0" }}>Premium Chauffeur</h3>
      <span className="canvas-loader" />
      <p style={textStyle}>Loading Experience: {progress.toFixed(0)}%</p>
      <div style={progressBarContainerStyle}>
        <div style={progressBarStyle}></div>
      </div>
      {item && <p style={loadingItemStyle}>Loading: {item}</p>}
      <p style={{ ...loadingItemStyle, marginTop: 15 }}>Please wait while we prepare your luxury experience</p>
    </Html>
  );
};

export default CanvasLoader;
