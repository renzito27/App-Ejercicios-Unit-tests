import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//const PrimeraApp = ({saludo = 'Hola Mundo' }) => {}
const PrimeraApp = ({saludo, subtitulo}) => {

    //const saludo = 'Hola Renziz!';
    // const hi = {
        // nombre : 'Renzo',
        // edad : 37
    // };  renderizar objetos

    return (
        <Fragment>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(hi,null,3)}</pre> */} 
            {/* renderizar objetos */}
            <p>{subtitulo}</p>
        </Fragment>

     );
}
    
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired

}   

PrimeraApp.defaultProps = {
    subtitulo : 'Soy el subtítulo'
}
    
export default PrimeraApp;