import React from 'react';
import EnregistreForm from '../../components/enregisterAvocatForm';
import ClientEnregistreForm from "../../components/enregisterClientForm"
class Enregistre extends React.Component {

    render() {
        return (
            <>
                <EnregistreForm />
                <ClientEnregistreForm/>
            </>
        )
    }
}

export default Enregistre;