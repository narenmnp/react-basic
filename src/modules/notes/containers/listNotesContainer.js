import React from 'react';
import ListNotesComponent from '../components/listNotesCoponent';

class ListNotesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListNotesComponent />
        )
    }
}

export default ListNotesContainer;
