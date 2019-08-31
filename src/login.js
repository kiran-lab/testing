class login extends React.Component{
    constructor(props){
        super(props);
        this.state={};

    
    }
    submitlogin(e){}
    render()
    {
        return(
            <div classname="inner-container">
                <div classname="header">
                    login
                    </div>
                    <div classname="box">
                        <div classname="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" classname="login-input" placeholder="Username"/>
                            </div>

                            
                        <div classname="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" classname="login-input" placeholder="Password"/>
                            </div>

                            <button type="button" classname="login-btn" onClick={this.submitlogin.bind(this)}>Login</button>>
                            </div>
                            </div>
        );
    }
}