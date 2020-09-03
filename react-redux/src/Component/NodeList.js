import React, { Component } from 'react';
import NodeItem from './NodeItem';
import { noteData } from './firebaseConnect';
class NodeList extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataFirebase:[  ]
        }
    }
    componentWillMount(){
        noteData.on('value',(notes) => {
            var arrayData = [];
            notes.forEach(element => {
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;
                arrayData.push({
                    key: element.key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })
            });
            this.setState({
                dataFirebase:arrayData
            })
        })
    }
    getData = () => {
        if(this.state.dataFirebase)
        {
            return this.state.dataFirebase.map((value,key) => {
               return (<NodeItem key={key} number={key} item={value}/>)
            })
        }
    }
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                {this.getData()}
                </div>
            </div>
        );
    }
}

export default NodeList;