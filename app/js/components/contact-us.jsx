var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <div className="flex-col-start-center">
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style={{background: "#ffffff"}}>
                Contact us
            </button>
            <h4 style={{color: "#ffffff"}}>(We'll be thrilled to give you a pitch)</h4>
        </div>
    },
});