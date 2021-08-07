const Button = (props) => {
  return (
    <button className={props.css} onClick={props.onClick}>
      <span>{props.content}</span> {/*  wtf is this shit */}
      {props.children}
    </button>
  )
}

export default Button
