var React = require('react');

var Title = require('../components/title.jsx');
var Description = require('../components/description.jsx');
var ContactUs = require('../components/contact-us.jsx');
var Media = require('../components/media.jsx');

module.exports = React.createClass({
    render: function(){
        return <div className="col-xs-12" id="homePage">
            <div className="flex-col-center-center" style={{flexWrap: "wrap"}}>
                <Title />
                <br />
                <br />
                <br />
                <br />
                <br />
                <ContactUs />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Media />
            </div>
        </div>
    },
});