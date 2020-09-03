import * as React from 'react';

export default class OrderGame extends React.Component {

    constructor(props) {
        super(props);
        this.restartGame = this.restartGame.bind(this)
    
        this.state = { win: false};
    }

    render() {
        return (
        <div>
            <h3>Juego del Orden</h3>
            <h5>Ordená las cajas de menor a mayor</h5>
        </div>
        )
    }

    restartGame() {
        this.setState({ win: false});
    }
}