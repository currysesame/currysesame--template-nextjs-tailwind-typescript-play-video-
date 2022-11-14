import React from "react";
import PropTypes from "prop-types";

const Canvas = ({ draw, height, width }) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    var img = new Image();
    const canvasWidth = 500;
    const canvasHeight = 500;
    const context = canvas.current.getContext("2d");
    window.img = img
    window.img.src = "./rawBG.bmp";
    window.canvasWidth = canvasWidth
    window.canvasHeight = canvasHeight
    window.context = context;
    window.context.drawImage(window.img, 0, 0,window.canvasWidth,  window.canvasHeight);       // DRAW THE IMAGE TO THE CANVAS.
    draw();
  });
  return <canvas ref={canvas} height={height} width={width} />;
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default Canvas;
