import React, { useState, useRef } from 'react';

function SortableList(props) {

    const [list, setList] = useState(props.data);
    const source = useRef(null);
    const item = useRef(null);

    const handleDragStart = (event) => {
      // Set current drag item
      item.current = event.target;
      // Set source item
      source.current = event.target;
      source.current.addEventListener("dragend", handleDragEnd);
    }

    const handleDragEnter = (event) => {
      if(event.target !== item.current) {
        // Update list ordering
        const data = [...list];
        const current = parseInt(item.current.dataset.index);
        const target = parseInt(event.target.dataset.index);
        data.splice(target, 0, data.splice(current, 1)[0]);
        setList(data);
        // Set current drag item
        item.current = event.target;
      }
    }

    const handleDragEnd = (event) => {
      // Reset source item
      source.current.removeEventListener("dragend", handleDragEnd);
      source.current = null;
      // Reset current drag item
      item.current = null;
    }

    return(
      <ul >
        {
          list.map((item, i) => {
            return (
                <li key={i}
                    data-index={i}
                    draggable
                    onDragOver={e => e.preventDefault()}
                    onDragStart={e => handleDragStart(e)}
                    onDragEnter={e => handleDragEnter(e)}>
                  {item}
                </li>
            );
          })
        }
      </ul>
    );
}

export default SortableList;
