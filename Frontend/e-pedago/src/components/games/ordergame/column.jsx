import React from 'react';
import styled from 'styled-components'; 
import {Droppable} from 'react-beautiful-dnd';
import Box from './box';

const Container = styled.div`
    margin: 8px;
    border:1px solid lightgrey;
    border-radius: 2px;
`;

const Title = styled.h3`
    padding: 8px;
`;

const BoxList = styled.div`
    padding: 8px;
    transition: background-color 0.5s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                    <BoxList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    >
                        {this.props.boxes.map((box, index) => (
                            <Box key={box.id} box={box} index={index}/>
                        ))}
                        {provided.placeholder}
                    </BoxList>
                    )}
                </Droppable>
            </Container>
            )
        }
}