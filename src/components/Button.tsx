
interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
}



function Button({text, type='button', onClick, disabled=false}: ButtonProps) {


    return (
        <button type={type} disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;