import React, { Component } from 'react'
import Operan from './Operan';

export default class StatePorps extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }
    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan : makanan_baru
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.setState({makanan : "soto"})}>Ganti Makanan</button>
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}
