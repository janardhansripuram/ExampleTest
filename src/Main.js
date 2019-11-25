/**
 * React Native App
 * Everthing starts from the EntryPoint
 */
import React, {Component} from 'react';

import Root from './Root';

export default class Main extends Component {
    constructor(props) {
    super(props);
    }

    render() {
    return <Root />;
    }
}
