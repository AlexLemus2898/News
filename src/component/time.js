//importar librerías
import React, { Component } from 'react';
import { Text } from 'native-base';
import moment from 'moment';

// crear componente
class Time extends Component {

    constructor(props) {
        super(props);
        this.date = props.time;
    }

    render() {
        const time = moment( this.date || moment.now() ).fromNow();
        return (
            <Text note style={{marginHorizontal:10}}>{time}</Text>
        );
    }
}

//hacer que este componente esté disponible para la aplicación
export default Time;
