import React, { Component } from 'react';
import { useDrag } from 'react-dnd';

const Development = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'card' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div style={{ overflow: 'hidden', clear: 'both' }}>
      <div ref={drag} style={{ opacity }}>
        <div className="development-section"></div>
      </div>
    </div>
  );
};

export default Development;
