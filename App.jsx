var Recieved_Mail_From = ["Rahul" , "Ganesh"];
var Recieved_Mail_Subject = ["Good Morning" , "Bless You"];
var Recieved_Mail_Body = ["Hi I am there .Where were you?" , "Bless You My Child"];

var Sent_Mail_To = ["Ra" , "Ga"];
var Sent_Mail_Subject = ["Good Morning" , "Bless You"];
var Sent_Mail_Body = ["Hi I am there .Where were you?" , "Thank You God"];
var k =0;

var SMessage;
SMessage = React.createClass({
    getInitialState : function () {
        return{
            state : false
        }
    },

    BodyDisplay : function () {
        this.setState(
            {state : true }
        )
    },

    BodyNDisplay : function () {
        this.setState(
            {state : false }
        )
    },

    render : function () {
        switch (this.state.state) {
            case false :
                return(
                    <form onClick={this.BodyDisplay}>{Sent_Mail_To[this.props.id]}
                        --{Sent_Mail_Subject[this.props.id]}</form>
                );
                break;
            case true :
                return(
                    <form onClick={this.BodyNDisplay}><li>{Sent_Mail_To[this.props.id]}
                        --{Sent_Mail_Subject[this.props.id]}</li> <br/> <p>{Sent_Mail_Body[this.props.id]}</p></form>
                );
                break;
        }
    }
});




var IMessage;
IMessage = React.createClass({
    getInitialState : function () {
        return{
            stat : false
        }
    },

    BodyDisplay : function () {
        this.setState(
            {stat : true }
        )
    },

    BodyNDisplay : function () {
        this.setState(
            {stat : false }
        )
    },

    render : function () {
        switch (this.state.stat) {
            case false :
                return(
            <li onClick={this.BodyDisplay}>{Recieved_Mail_From[this.props.id]}
            --{Recieved_Mail_Subject[this.props.id]}</li>
        );
        break;
            case true :
                return(
                <ul onClick={this.BodyNDisplay}><li>{Recieved_Mail_From[this.props.id]}
                    --{Recieved_Mail_Subject[this.props.id]}</li> <br/> <p>{Recieved_Mail_Body[this.props.id]}</p></ul>
        );
                break;
            }
    }
});

var Inbox;
Inbox = React.createClass({
    render: function () {
            return (
                <div>
                    <ul>
                        <h2>Messages</h2>
                        <IMessage id="0"/>
                        <IMessage id="1"/>
                    </ul>
                </div>
            );
        }
});


var Compose;
Compose = React.createClass({
    getInitialState : function () {
        return{
            s : 0
        }
    },

    Acknowledge : function () {
        k=(k+1)%2;
        Sent_Mail_To[k]=this.TO.value;
        Sent_Mail_Subject[k]=this.Subject.value;
        Sent_Mail_Body[k]=this.Body.value;
        this.setState(
            {s : 1 }
        )
    },

    MessageSent : function () {
        this.setState(
            {s : 0 }
        )
    },
    render: function (){
        if(this.state.s==0){
        return (

            <div>
                To:
                <input type="text" ref={input => this.TO =input}>
                </input>
                <br></br>
                 Subject:
                 <input type="text" ref={input => this.Subject =input}>
                 </input>
                 <br></br>
                Body:
                <input type="text" ref={input => this.Body =input}>
                </input>
                <br></br>
                <button onClick={this.Acknowledge}>Send</button>
            </div>
        );
        }
        else
        {
          return(
              <div>
                  <h4>Message Successfully Sent</h4>
                  {this.MessageSent};
                  <Inbox/>
                  </div>
          );
        }

    }
});


var Sent;
Sent = React.createClass({
    render: function (){
        return (

            <div>
                <ul>
                    <h2>Messages</h2>
                    <SMessage id={k%2} />
                    <SMessage id={(k+1)%2}/>
                </ul>
            </div>

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

var Login;
Login = React.createClass({
    getInitialState : function () {
        return{
            Login_status : 0
        }
    },
    Verify : function () {
var User_Name = this.Username.value;
var Password = this.Passwrd.value;
if(User_Name == '' || Password == '')
{
    this.setState(
        {Login_status : 1 }
    )
}
else {
    this.setState(
        {Login_status : 2 }
    )
}
    },
    render: function () {
        switch (this.state.Login_status) {
            case 0 :
                return (
                    <ul>
                        User Name:
                        <input type="text" ref={input => this.Username = input}>
                        </input>
                        <br/>
                        Password:
                        <input type="password" ref={input => this.Passwrd = input}>
                        </input>
                        <br/>
                        <button onClick={this.Verify}>Login</button>
                    </ul>
                )
                break;
            case 1 :
                return (
                    <ul>
                        User Name:
                        <input type="text" ref={input => this.Username = input}>
                        </input>
                        <br/>
                        Password:
                        <input type="password" ref={input => this.Passwrd = input}>
                        </input>
                       <br/>
                        <button onClick={this.Verify}>Login</button>
                        <h5>Invalid Credentials</h5>
                    </ul>
                )
                break;
            case 2 :
                return (
                    <ul>
                        <SideNav/>
                    </ul>
                )
                break;
        }
    }
    });

ReactDOM.render(
    <Login/>,
    document.getElementById('container')
);