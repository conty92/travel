

import  "../styles/One.css"
import "../assets/images/Rectangle26.png"
import plane from "../assets/images/plane.png"
// import Vector from "../assets/images/Vector.png"
// import Group from "../assets/images/Group 688.png"

const One = () => {
    return ( 
        <>
        <main>
            <aside className="left"></aside>
            <aside className="right">
                <div className="plane">
                    <img src={plane} alt="" />
                </div>
                <div className="welcome">
                    <h1>Welcome</h1>
                    <p>Login with Email</p>
                </div>
                <div className="form">
                    <fieldset className="email">
                        <legend>Email id</legend>
                    </fieldset>
                    <fieldset className="password">
                        <legend>Password</legend>
                    </fieldset>
                    <p>Forgot your password</p>
                </div>
                <div className="login">
                    <p>Login</p>
                </div>
                <div className="or">
                    <div className="line1"></div>
                    <p>OR</p>
                    <div className="line2"></div>
                </div>
                <div className="tri">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <div className="dont">
                    <p>Don't have account?</p>
                    <h5>Register Now</h5>
                </div>
                {/* <div className="pic">
                    <img src={Vector} alt="" />
                    <img src={Group} alt="" />
                </div> */}

            </aside>
        </main>
            
        </>
     );
}
 
export default One;