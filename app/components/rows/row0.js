var React = require('react');

var row0 = React.createClass({


    _markGroups: function (elm) {

        switch(elm){

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
                this.setElmClass = 'pull-left m-boron';

                break;

            case 'Element Nonmetal Carbon p':
                this.setElmClass = 'pull-left p-carbon';

                break;

            case 'Element Nonmetal Pnictogen p':
                this.setElmClass = 'pull-left pnictogen';

                break;

            case 'Element Nonmetal Chalcogen p':
                this.setElmClass = 'pull-left chalcogen';

                break;

            case 'Element Halogen p':
                this.setElmClass = 'pull-left halogen';

                break;

            case 'Poor Boron p':
                this.setElmClass = 'pull-left p-boron';

                break;

            case 'Metalloid Carbon p':
                this.setElmClass = 'pull-left m-carbon';

                break;

            case 'Element Transition d':

                this.setElmClass = 'pull-left default';

                break;

            default :
                this.setElmClass = 'pull-left missed';

                break;

        }

    },


    render: function(){

        var _BREAK_POINT = this.props.breakPoint;


        var ul1 = this.props.data.map(function(elm, index){

            var _setElmClass = 'pull-left';

            if(elm.small === '57-71' || elm.small === '89-103'){

                this.setElmClass = 'pull-left adjust-value';
            }

            //console.log(elm.group);

            this._markGroups(elm.group);


            if(index < _BREAK_POINT ){

                return <li className={this.setElmClass} key={index}>

                    <h3>{elm.small}</h3>
                    <span>{elm.number}</span>

                </li>
            }else {
                return false;
            }

        }.bind(this));

        var ul2 = this.props.data.map(function(elm, index){

            if(index >= _BREAK_POINT ) {

                this._markGroups(elm.group);

                return <li className={this.setElmClass} key={index}>

                    <h3>{elm.small}</h3>
                    <span>{elm.number}</span>

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