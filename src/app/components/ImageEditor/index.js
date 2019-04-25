'use strict';

import React, {PropTypes, Component} from 'react';
import './ImageEditor.css';
import classNames from 'classnames';

class ImageEditor extends Component {
  constructor(...args) {
    super(...args);
    this.canvas = null;
    this.image = new Image();
    this.selectedRectangle = {x: 0, y: 0, w: 0, h: 0};
    this.beingEdited = false;
    this.setCanvas = this.setCanvas.bind(this);
    this.drawImage = this.drawImage.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  render() {
    const {className, style} = this.props;
    const {setCanvas} = this;
    return (
      <div style={style} className={classNames('ImageEditor', className)}>
        <canvas
          id="canvas"
          ref={setCanvas} style={{cursor: 'crosshair'}}
          onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          >
        </canvas>
      </div>
    );
  }

  handleMouseDown(e) {
    const mousePos = this.getMousePos(e);
    this.startRectangleSelection(mousePos);
    this.beingEdited = true;
  }

  startRectangleSelection(mousePos) {
    const {selectedRectangle: selRect} = this;
    selRect.x = mousePos.x;
    selRect.y = mousePos.y;
    selRect.w = 0;
    selRect.h = 0;
  }

  handleMouseMove(e) {
    if (!this.beingEdited) {
      return;
    }
    const mousePos = this.getMousePos(e);
    this.updateSelectedRectangle(mousePos);
    this.redrawImage();
  }

  updateSelectedRectangle(mousePos) {
    const {selectedRectangle: selRect} = this;
    selRect.w = mousePos.x - selRect.x;
    selRect.h = mousePos.y - selRect.y;
  }

  getMousePos(e) {
    const {canvas} = this;
    const canvasRect = canvas.getBoundingClientRect();
    const mousePos = {
      x: Math.round((e.clientX - canvasRect.left) / (canvasRect.right - canvasRect.left) * canvas.width),
      y: Math.round((e.clientY - canvasRect.top) / (canvasRect.bottom - canvasRect.top) * canvas.height)
    };
    return mousePos;
  }

  handleMouseUp() {
    this.beingEdited = false;
    this.finishRectangleSelection();
    this.props.onRectangleSelected({...this.selectedRectangle});
    this.redrawImage();
  }

  finishRectangleSelection() {
    const {selectedRectangle: selRect} = this;
    if (selRect.w < 0) {
      selRect.x += selRect.w;
      selRect.w *= -1;
    }
    if (selRect.h < 0) {
      selRect.y += selRect.h;
      selRect.h *= -1;
    }
  }

  redrawImage() {
    const {canvas, image, selectedRectangle: selRect} = this;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = '2';
    ctx.strokeRect(selRect.x, selRect.y, selRect.w, selRect.h);
  }

  componentDidMount() {
    this.drawImage();
  }

  componentDidUpdate() {
    this.drawImage();
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }

  drawImage() {
    const {canvas, image} = this;
    const ctx = canvas.getContext('2d');
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    };
    image.src = this.props.imageDataUrl;
  }

  drawRectangle() {
    const {canvas} = this;
    const ctx = canvas.getContext('2d');
    ctx.rect(0, 0, 200, 100);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 7;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}

ImageEditor.propTypes = {
  imageDataUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onRectangleSelected: PropTypes.func
};

ImageEditor.defaultProps = {
  className: null,
  style: null,
  onRectangleSelected: () => {}
};

export default ImageEditor;
