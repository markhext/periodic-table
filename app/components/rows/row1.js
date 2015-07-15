var React = require('react');
var Styler = require('../../utils/styler');

var row1 = React.createClass({



    render: function(){

        var ul3 = this.props.data.map(function(elm, index){

            this.setElmClass =  Styler.setGroups(elm.group);

            return <li className={this.setElmClass} key={index}>

                        <div className="list-cell">

                            <span className="electrons">{elm.number}</span>
                            <h3>{elm.small}</h3>
                            <span className="elm-name">{elm.name}</span>

                        </div>
                    </li>

        }.bind(this));

        return (

            <section className="pull-right">

                <ul>
                    {ul3}
                    <div className="clear"></div>
                </ul>



                <div className="clear"></div>

            </section>

        )
    }
});


module.exports = row1;