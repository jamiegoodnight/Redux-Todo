import React from 'react';

class Todo extends React.Component {
    render(){ 
        return (
            <div>
                {this.props.state.map(x => (
                    <h3>{x.todo}</h3>
                ))}
            </div>
        )
    }    
}   

export default Todo;