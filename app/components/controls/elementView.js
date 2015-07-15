var React = require('react');
var Styler = require('../../utils/styler');
var Row0 = require('../rows/row0');



var elementView = React.createClass({




    render: function(){

        this.setElmClass =  Styler.setGroups(this.props.group);

        return (
            <div className="element-view">

                <aside className={this.setElmClass}>
                    <strong>{this.props.number}</strong>
                    <h2>{this.props.small}</h2>
                    <strong>{this.props.name}</strong>
                </aside>

            </div>

        )
    }

});

module.exports = elementView;