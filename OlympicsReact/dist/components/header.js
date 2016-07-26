// tutorial1.js
var Header = React.createClass({
    displayName: "Header",


    render: function () {
        return React.createElement(
            "div",
            { className: "c-header" },
            React.createElement(
                "div",
                { className: "c-heading t-center-in-parent" },
                "Olympics"
            )
        );
    }
});