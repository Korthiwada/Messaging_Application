
var RecievedMailFrom = ["Rahul" , "Ganesh"];
var RecievedMailSubject = ["Good Morning" , "Bless You"];
var RecievedMailBody = ["Hi I am there .Where were you?" , "Bless You My Child"];
var k =2;

/*var Message;
Message = React.createClass({
    render : function () {
        return(
            <li>{RecievedMailFrom[this.props.id]}
            --{RecievedMailSubject[this.props.id]}</li>
        );
    }
});*/

var Inbox;
Inbox = React.createClass({
    render: function () {
        return(
            <div>
                <ul>
                    <h2>Messages</h2>
                    /*<Message id=0/>*/
                        {/*<li>{RecievedMailFrom[1]}*/}
                            {/*--{RecievedMailSubject[1]}</li>*/}
                    </ul>
                </div>
            );
    }
});


var Compose;
Compose = React.createClass({
    UpdateSentMail: function () {
        this.setState(
            {status : 1 }
        )
    },
    render: function (){
        return (

            <div>
                To:
                <input type="text">
                </input>
                <br></br>
                 Subject:
                 <input type="text">
                 </input>
                 <br></br>
                Body:
                <input type="text">
                </input>
                <br></br>

                <button onClick={this.UpdateSentMail}>Send</button>
            </div>

        );
    }
});


var Sent;
Sent = React.createClass({
    render: function (){
        return (

            <p>Hi Sent</p>

        );
    }
});




var SideNav;
SideNav = React.createClass({
    getInitialState : function () {
        return{
            status : 1
        }
    },

    State_Compose : function () {
        this.setState(
            {status : 0 }
        )
    },

    State_Inbox : function () {
        this.setState(
            {status : 1 }
        )
    },

    State_Sent : function () {
        this.setState(
            {status : 2 }
        )
    },

    render: function () {
        switch (this.state.status) {
            case 0 :
                return (
                    <ul>
                        <button onClick={this.State_Compose}>Compose</button>
                        <li onClick={this.State_Inbox}>Inbox</li>
                        <li><a onClick={this.State_Sent}>Sent Mail {this.state.status}</a></li>
                        <Compose/>
                    </ul>
                )
                break;
            case 1 :
                return (
                    <ul>
                        <button onClick={this.State_Compose}>Compose</button>
                        <li onClick={this.State_Inbox}>Inbox</li>
                        <li><a onClick={this.State_Sent}>Sent Mail {this.state.status}</a></li>
                        <Inbox/>
                    </ul>
                )
                break;
            case 2 :
                return (
                    <ul>
                        <button onClick={this.State_Compose}>Compose</button>
                        <li onClick={this.State_Inbox}>Inbox</li>
                        <li><a onClick={this.State_Sent}>Sent Mail {this.state.status}</a></li>
                    <Sent/>
                    </ul>
                )
                break;
        }
    }

});


ReactDOM.render(
    <SideNav/>,
    document.getElementById('container')
);