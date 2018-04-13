import React from "react";

export default class CanvasField extends React.Component {
  render() {
    const { title, grow, children } = this.props;
    return (
      <div className="canvas-field" style={{ flexGrow: grow || 1 }}>
        <h4 className="canvas-field-header">{title}</h4>
        <div className="canvas-content" />
      </div>
    );
  }
}