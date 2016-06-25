var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <div className="flex-row-center-center" style={{flexWrap: "wrap"}}>
            <img src="./img/logo-rounded.png" height="100" width="100" />
            <h3 style={{color: "#ffffff", width: 500, marginLeft: 20}}>WalletGuru is a localized expense manager built for India. Its available in English, Hindi, Tamil and more. </h3>
        </div>
    },
});