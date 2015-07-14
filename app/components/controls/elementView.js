var React = require('react');
var Row0 = require('../rows/row0');


var elementView = React.createClass({

    getInitialState: function(){
       return {
           element: '---'
       }
    },

    componentDidMount: function () {

        var test = Row0.data;

        console.log('DATA: -->', test);

        this.setState({
            element: test
        })

    },


    render: function(){
        return (

            <div className="element-view">

                <aside>
                {this.props.data}
                </aside>

            </div>

        )
    }

});

module.exports = elementView;