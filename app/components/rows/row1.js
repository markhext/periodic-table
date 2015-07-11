var React = require('react');

var row1 = React.createClass({

    render: function(){

        var _BREAK_POINT = this.props.breakPoint;

        var ul1 = this.props.data.map(function(elm, index){

            if(index < _BREAK_POINT ){
                return <li className="pull-left" key={index}>

                    <h3>{elm.small}</h3>
                    <span>{elm.name}</span>

                </li>
            }else {
                return false;
            }

        });

        var ul2 = this.props.data.map(function(elm, index){

            if(index >= _BREAK_POINT ) {

                return <li className="pull-left" key={index}>

                    <h3>{elm.small}</h3>
                    <span>{elm.name}</span>

                </li>
            }else {
                return false;
            }
        });


        return (

            <section>

                <ul className="pull-left">
                    {ul1}
                    <div className="clear"></div>
                </ul>

                <ul className="pull-right">
                    {ul2}
                    <div className="clear"></div>
                </ul>

                <div className="clear"></div>

            </section>

        )
    }
});


module.exports = row1;