var React = require('react');
var elementView = require('../controls/elementView');

var row0 = React.createClass({


    _markGroups: function (elm) {

        switch(elm){

            case '':
                this.setElmClass = 'pull-left hydrogen';

                break;

            case 'Element Noble p':
                this.setElmClass = 'pull-left noble';

                break;
            case 'Element Alkali s':
                this.setElmClass = 'pull-left alkali';

                break;
            case 'Element Alkaline s':
                this.setElmClass = 'pull-left alkaline';

                break;

            case 'Element Metalloid Boron p':
                this.setElmClass = 'pull-left metalloid m-boron';

                break;

            case 'Element Nonmetal Carbon p':
                this.setElmClass = 'pull-left nonmetal p-carbon';

                break;

            case 'Element Nonmetal Pnictogen p':
                this.setElmClass = 'pull-left nonmetal pnictogen';

                break;

            case 'Element Nonmetal Chalcogen p':
                this.setElmClass = 'pull-left nonmetal chalcogen';

                break;

            case 'Element Halogen p':
                this.setElmClass = 'pull-left halogen';

                break;

            case 'Poor Boron p':
                this.setElmClass = 'pull-left poor p-boron';

                break;

            // --

            case 'Element Poor Boron p':
                this.setElmClass = 'pull-left poor boron-p';

                break;

            case 'Element Metalloid Carbon p':
                this.setElmClass = 'pull-left metalloid p-carbon';

                break;

            case 'Element Poor Carbon p':
                this.setElmClass = 'pull-left poor p-carbon-p';

                break;

            case 'Element Metalloid Pnictogen p':
                this.setElmClass = 'pull-left metalloid pnictogen-p';

                break;

            case 'Element Metalloid Chalcogen p':
                this.setElmClass = 'pull-left metalloid chalcogen-p';

                break;

            case 'Lanthanoid InnerBorder BlueLeft BlueTop BlueRight':
                this.setElmClass = 'pull-left ';

                break;

            case 'Actinoid InnerBorder BlueLeft BlueRight':
                this.setElmClass = 'pull-left ';

                break;

            case 'Element Poor Pnictogen p':
                this.setElmClass = 'pull-left poor p-pnictogen-p';

                break;

            case 'Element Poor Chalcogen p':
                this.setElmClass = 'pull-left poor c-chalcogen-p';

                break;

            // ---

            case 'Element Transition d':

                this.setElmClass = 'pull-left transition default';

                break;

            default :
                this.setElmClass = 'pull-left missed';

                console.log('MISSED 0: -->', elm);
                break;

        }

    },

    getInitialState: function(){
        return {
            data: '---'
        }
    },


    update: function (k) {

        console.log('CLICKED: -->', this.props.data[k].small);

        this.props.onUpdate(this.props.data[k].small);





    },


    render: function(){

        var _BREAK_POINT = this.props.breakPoint;

        var ul1 = this.props.data.map(function(elm, index){

            this._markGroups(elm.group);

            if(elm.small === '57-71' || elm.small === '89-103'){

                this.setElmClass = 'pull-left conceal';
            }


            if(index < _BREAK_POINT ){

                return <li onMouseOver={this.update.bind(this, index)}  className={this.setElmClass} key={index}>

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

                this._markGroups(elm.group);

                return <li className={this.setElmClass} key={index}>

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