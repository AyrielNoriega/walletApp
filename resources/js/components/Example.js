import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TransferForm } from './TransferForm';
import { TransferList } from './TransferList';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 m-t-md">
                        <p className='title'> $ 1000 </p>
                    </div>
                    <div className='col-md-12'>
                        <TransferForm />
                    </div>
                </div>
                <div className="m-t-d">
                    <TransferList />
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
