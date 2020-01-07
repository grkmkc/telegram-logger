import React, { useRef, Fragment } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const BackLogCard = ({ id, index, moveCard, backlog }) => {
  console.log('1');
  const ref = useRef(null);
  /* const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  }); */
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  /* drag(drop(ref)); */
  return (
    <Fragment>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <div ref={drag} style={{ opacity }}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text no-padding">
              <span className="card-title section-card-title">
                {backlog.name}
              </span>
              <div className="p-1">{backlog.issue}</div>
              <div className="tagsWrapper">
                {backlog.tags
                  ? backlog.tags.map((tag, key) => (
                      <span
                        key={key}
                        className="tagsStyle"
                        style={{
                          backgroundColor: tag.metaData.color
                        }}
                      >
                        {tag.name}
                      </span>
                    ))
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BackLogCard;
