var React = require('react');
var ReactDOM = require('react-dom');

var InputComponent = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        }
    },

    incrementCount: function() {
        this.setState({
            count: this.state.count + 1
        });
    },

    decrementCount: function() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }
    },

    inputCount: function (e) {
        if (e.target.value !== "") {
            this.setState({
                count: parseInt(e.target.value)
            });
        } else {
            this.setState({
                count: ""
            });
        }
    },

    render: function() {
        return (
            <div>
                <h3>
                    Counter {this.props.title}
                </h3>

                <p>Value: {this.state.count}</p>

                <input onChange={this.inputCount} placeholder="Type the count value !" value={this.state.count}>
                </input>

                <button onClick={this.incrementCount}>
                    +
                </button>

                <button onClick={this.decrementCount}>
                    -
                </button>
            </div>
        )
    }
});

var Main = React.createClass({
    getInitialState: function () {
        return {
            allInputs: [
                {
                    title: 1
                }
            ],

            totalInputCount: 1
        }
    },

    addInput: function () {
        this.setState({
            allInputs: this.state.allInputs.concat({title: this.state.totalInputCount+1}),
            totalInputCount: this.state.totalInputCount + 1
        });
    },

    render: function() {
        return (
            <div>
                <button onClick={this.addInput}>
                    <strong>
                        Add a counter
                    </strong>
                </button>
                {
                    this.state.allInputs.map(function (input) {
                        return <InputComponent title={input.title} key={input.title}/>
                    })
                }
            </div>
        )
    }
});

ReactDOM.render(<Main/>, document.getElementById('app'));