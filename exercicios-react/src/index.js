import React from 'react';
import ReactDOM from 'react-dom';

// import de componentes
import PrimeiroComponente from './componentes/PrimeiroComponente';
import ComAgrup from './componentes/ComponenteAgrupado'
import Familia from './componentes/ComponenteFamilia'
import Filho from './componentes/ComponenteFilho'

ReactDOM.render(
    <div>
        <Familia sobrenome = 'Abreu'>
            <Filho nome = 'Jose'/>        
            <Filho nome = 'Maria'/>       
            <Filho nome = 'Joana'/>     
            <Filho nome = 'Eduardo'/>      
        </Familia>
    </div>
, document.getElementById('root'));

// ReactDOM.render(<PrimeiroComponente name='Meu componente com props!'/>, 
// document.getElementById('root'));

// ReactDOM.render(<ComAgrup/>, document.getElementById('root'));
