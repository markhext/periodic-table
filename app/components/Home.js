var React = require('react');
var helpers = require('../utils/helpers');
var Row0 = require('./rows/row0');


var Home = React.createClass({

    getInitialState: function () {
      return {
         row0: [],
         row1: [],
         row2: [],
         row3: [],
         row4: [],
         row5: [],
         row6: []
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
                row6: dataObj.row6
            });


        }.bind(this));

    },

    render: function(){
        return (

            <div>
                <Row0 data={this.state.row0} />
            </div>


        )
    }
});

module.exports = Home;