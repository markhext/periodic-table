var React = require('react');

var row1 = React.createClass({

    render: function(){

        var ul3 = this.props.data.map(function(elm, index){

            return <li className="pull-left" key={index}>

                <span>{elm.number}</span>
                <h3>{elm.small}</h3>

            </li>

        });

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