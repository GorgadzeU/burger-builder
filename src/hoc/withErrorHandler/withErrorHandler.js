import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxilliary';

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {

        state = {
            error: null
        }

        constructor () {
            super()
            axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        errorConfirmHandler = () => {
            this.setState({error: null})
        }

      render() {
        return (
            <Aux>
                <Modal show={this.state.error}
                modalClosed={this.errorConfirmHandler}
                >{this.state.error ? this.state.error.message : null}</Modal>
                <WrappedComponent {...this.props} />
            </Aux>
        )
      }
  }
}

export default WithErrorHandler;