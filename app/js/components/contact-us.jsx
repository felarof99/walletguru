var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <div className="flex-col-start-center">
            <h4 style={{color: "#ffffff"}}>Check out our beautiful Android App</h4>

            <a href="http://bit.ly/walletguru" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style={{background: "#ffffff"}}>
                Install from here!
            </a>
        </div>
    },
});