

import  "../styles/One.css"
import "../assets/images/Rectangle26.png"
import plane from "../assets/images/plane.png"

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
            </aside>
        </main>
            
        </>
     );
}
 
export default One;