import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

export default class OrderGame extends React.Component {
    state = initialData;

    onDragEnd = result => {
      const { destination, source, draggableId } = result;
  
      if (!destination) {
        return;
      }
  
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
  
      const column = this.state.columns[source.droppableId];
      const newBoxIds = Array.from(column.boxIds);
      newBoxIds.splice(source.index, 1);
      newBoxIds.splice(destination.index, 0 , draggableId)
  
      const newColumn = {
        ...column,
        boxIds: newBoxIds,
      };
  
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        }
      }
  
      this.setState(newState);
    }
  
    render() {
      return (
        <DragDropContext 
        onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const boxes = column.boxIds.map(boxId => this.state.boxes[boxId])
          this.randomize(boxes);
          return <Column key= {column.id} column={column} boxes={boxes} />;
          })}
          </DragDropContext>
      );
    }
    
    randomize(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

  }