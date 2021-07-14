import React from 'react';
import EnregistreForm from '../../components/enregisterAvocatForm';

class Enregistre extends React.Component {

    render() {
        return (
            <>
                <EnregistreForm history={this.props.history} />
            </>
        )
    }
}

export default Enregistre;