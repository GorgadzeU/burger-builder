import React, { Component } from 'react';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        },
        loadgin: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            costumer: {
                name: 'Beqa',
                adress: {
                    street: 'testStreet',
                    postalCode: '9021',
                    country: 'Georgia'
                },
                email: 'Test@gmail.com'
            },
            deliveryMethod: 'Glovo'
        }

        axios.post('https://burger-builder-c5b46.firebaseio.com/orders.json', order)
        .then(response => {
            this.setState({loading: false})
            this.props.history.push('/')
        }
            )
        .catch(err =>  this.setState({loading: false}))
    }

    render() {
        let form = (
        <form>
            <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
            <input className={classes.Input} type='email' name='email' placeholder='Your Mail'/>
            <input className={classes.Input} type='text' name='street' placeholder='Street'/>
            <input className={classes.Input} type='text' name='postal' placeholder='Postal Code'/>
            <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
        </form>
        );
        if (this.state.loadgin) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData;