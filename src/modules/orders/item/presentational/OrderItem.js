import React from 'react'
import { Wrapper } from '../../../common/page'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import OrderView from '../../presentational/OrderCardView';

export default props => {
    return (
        <Wrapper>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Orden</ModalHeader>
                <ModalBody>
                    <OrderView {...props} />

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.goBack}>Volver</Button>{' '}
                </ModalFooter>
            </Modal>
        </Wrapper >
    )
}