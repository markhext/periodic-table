var React = require('react');
var Styler = require('../../utils/styler');
var elementView = require('../controls/elementView');

var row0 = React.createClass({


    update: function (k) {
        this.props.onUpdate(this.props.data[k]);
    },


    render: function(){

        var _BREAK_POINT = this.props.breakPoint;

        var ul1 = this.props.data.map(function(elm, index){

            this.setElmClass =  Styler.setGroups(elm.group);   //this._markGroups(elm.group);

            if(elm.small === '57-71' || elm.small === '89-103'){

                this.setElmClass = 'pull-left conceal';
            }


            if(index < _BREAK_POINT ){

                return <li onMouseOver={this.update.bind(this, index)} className={this.setElmClass} key={index}>

                            <div className="list-cell">

                                <span>{elm.number}</span>

                                <h3>{elm.small}</h3>

                                <span className="elm-name">{elm.name}</span>

                                <div className="clear"></div>

                            </div>

                        </li>
            }else {
                return false;
            }

        }.bind(this));

        var ul2 = this.props.data.map(function(elm, index){

            if(index >= _BREAK_POINT ) {

                this.setElmClass =  Styler.setGroups(elm.group);

                return <li onMouseOver={this.update.bind(this, index)} className={this.setElmClass} key={index}>

                            <div className="list-cell">

                                <span>{elm.number}</span>
                                <h3>{elm.small}</h3>

                                <span className="elm-name">{elm.name}</span>

                            </div>


                        </li>
            }else {
                return false;
            }
        }.bind(this));


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


module.exports = row0;