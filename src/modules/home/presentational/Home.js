import React from 'react';
import { Body, Wrapper, Header } from '../../common/page';

export default ({ counter, anAction }) => (
    <Wrapper>
        <Header title='Inicio' />
        <Body>
            <div className="jumbotron">
                <h1 className="display-4">Hola!</h1>
                <p className="lead"></p>
                <hr className="my-4" />
                    {/* <p>Seleccionar el ítem de menú correspondiente</p> */}
            </div>
        </Body>
    </Wrapper>
    )