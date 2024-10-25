import {ReactNode} from "react";

const Button = ({children}: {children: ReactNode }) => {
    return <button style={{
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: 'blue',
        border: '1px solid blue',
        width: 'fit-content'
    }} type="button">Press Me {children}</button>
}
export default Button;
