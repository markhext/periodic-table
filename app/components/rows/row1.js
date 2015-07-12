var React = require('react');

var row1 = React.createClass({


    _markGroups: function (elm) {

        switch(elm){

            case 'Element Lanthanoid f':

                this.setElmClass = 'pull-left lanthanoid f';

                break;

            case 'Element Lanthanoid d':

                this.setElmClass = 'pull-left lanthanoid d';

                break;

            case 'Element Actinoid f':

                this.setElmClass = 'pull-left actinoid f';

                break;

            case 'Element Actinoid d':

                this.setElmClass = 'pull-left actinoid d';

                break;



            default :
                this.setElmClass = 'pull-left missed';

                console.log('MISSED 1: -->', elm);
                break;

        }

    },


    render: function(){

        var ul3 = this.props.data.map(function(elm, index){

            this._markGroups(elm.group);

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