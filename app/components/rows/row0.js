var React = require('react');
var _ = require('lodash');


var row0 = React.createClass({


    render: function(){

        var test = this.props.data.map(function(elm, index){
            return <li key={index}>

                    <h4>{elm.small}</h4>
                    <span>{elm.name}</span>

                    </li>
        });

        return (
            <ul>
            {test}
            </ul>
        )
    }
});


module.exports = row0;
