var React = require('react'),
    RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
    render: function(){
        return (
           <div className="main-container">

               <nav>

                   <div className="document-width">
                       <h2>Menu</h2>
                   </div>

               </nav>


               <div className="container document-width">

                    <RouteHandler />

               </div>

           </div>


        )
    }
});

module.exports = Main;
