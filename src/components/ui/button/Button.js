

const Button = ({content, children}) => {
    return (
        <button>
            <span>{content}</span>
            {children}
        </button>
    )
}

export default Button