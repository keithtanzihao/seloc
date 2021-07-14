
import './Button.css'

const Button = ({css, content, children}) => {
    return (
        <button className={css}>
            <span>{content}</span>
            {children}
        </button>
    )
}

export default Button