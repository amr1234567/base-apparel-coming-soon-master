import { useEffect, useState } from "react";

const FormField = () => {
    const [wrongEmail, setWrongEmail] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    let hundleSubmit = (e) => {
        e.preventDefault();
        
        if (!emailValue.match(mailformat) || !emailValue) {
            setWrongEmail(true);
        }else if (emailValue.match(mailformat)) {
            setEmailValue('');
            setWrongEmail(false)
            console.log('Done')
        }
    };
    useEffect(() => {
        console.log('new Render')
    },[])
    return (
        <div className="form-field">
            <form onSubmit={hundleSubmit}>
                <div className="input-field">
                    <input
                        type="text"
                        name="email"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        id="email"
                        placeholder="Email Address"
                    />
                    {wrongEmail && <img className="wrong" src="/images/icon-error.svg"/>}
                </div>
                <button><img src="/images/icon-arrow.svg" alt="" /></button>
            </form>
            {wrongEmail && <p>provide a valid email please</p>}
        </div>
    );
}
 
export default FormField;