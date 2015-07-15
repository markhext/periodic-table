var React = require('react');
var helpers = require('../utils/helpers');
var Row0 = require('./rows/row0');
var Row1 = require('./rows/row1');
var ElementView = require('./controls/elementView');


var Home = React.createClass({

    getInitialState: function () {
      return {
         row0: [],
         row1: [],
         row2: [],
         row3: [],
         row4: [],
         row5: [],
         row6: [],
         sub1: [],
         sub2: [],
         data: 'H'
      }
    },

    componentDidMount: function () {

        helpers.getElementInfo().then(function(dataObj){

            this.setState({
                row0: dataObj.row0,
                row1: dataObj.row1,
                row2: dataObj.row2,
                row3: dataObj.row3,
                row4: dataObj.row4,
                row5: dataObj.row5,
                row6: dataObj.row6,
                sub1: dataObj.sub1,
                sub2: dataObj.sub2,
                _small: 'H',
                _name: 'Hydrogen',
                _number: 1,
                _electrons: [1],
                _style: ''
            });


        }.bind(this));

    },

    onUpdate: function(data, style){
        this.setState({
            _small: data.small,
            _name: data.name,
            _number: data.number,
            _electrons: data.electrons,
            _group: data.group

        })
    },


    render: function(){
        return (

            <div className="elements-container">

                <section>
                    <ElementView
                        small={this.state._small}
                        name={this.state._name}
                        number={this.state._number}
                        electrons={this.state._electrons}
                        group={this.state._group}
                    />

                </section>

                <div>
                    <Row0 onUpdate={this.onUpdate} data={this.state.row0} breakPoint="1" />
                    <Row0 onUpdate={this.onUpdate} data={this.state.row1} breakPoint="2" />
                    <Row0 onUpdate={this.onUpdate} data={this.state.row2} breakPoint="2" />
                    <Row0 onUpdate={this.onUpdate} data={this.state.row3} breakPoint="18" />
                    <Row0 onUpdate={this.onUpdate} data={this.state.row4} breakPoint="18" />
                    <Row0 onUpdate={this.onUpdate} data={this.state.row5} breakPoint="18" />
                    <Row0 onUpdate={this.onUpdate} data={this.state.row6} breakPoint="18" />
                </div>

                <div className="sub-elements">
                    <Row1 data={this.state.sub2} />
                    <Row1 data={this.state.sub1} />
                </div>


            </div>


        )
    }
});

module.exports = Home;