import React from 'react';
import { connect } from 'react-redux'
import { getAllNotesFromServer } from '../action'

class ListNotesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.createRows = this.createRows.bind(this);
    }

    createRows() {
        if (this.props.allNotesList && this.props.allNotesList.length > 0) {
            /* Array.map() method used for looping an array. Its works like a for loop. */
            return this.props.allNotesList.map((note) => {
                console.log("DATA :::: ", note.title)
                return (
                    <tr>
                        <td>{note.title}</td>
                        <td>{note.description}</td>
                    </tr>
                )
            })
        }
    }

    render() {
        console.log("NOTES AS PROPS ::: ", this.props.allNotesList)
        return (
            <div>
                <table border="2px">
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    {this.createRows()}
                </table>
            </div>
        )
    }

    componentDidMount() {
        getAllNotesFromServer();
    }
}

function mapStateToProps(state) {
    console.log("GLOBAL ::: ", state)
    return {
        allNotesList: state.notesReducer.notesList
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNotesComponent);