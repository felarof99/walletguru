var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <div className="flex-row-center-center">
            <img src="./img/logo-rounded.png" height="100" width="100" />
            <h3 style={{color: "#ffffff", width: 500, marginLeft: 20}}>WalletGuru is an early stage fintech company transforming on-ground cashless payments in India with a complete rethink of the mobile wallet model.</h3>
        </div>
    },
});