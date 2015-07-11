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

            console.log(dataObj.row0);

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

            <ul>
                <Row0 />
            </ul>



        )
    }
});

module.exports = Home;