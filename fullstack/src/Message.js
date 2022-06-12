function Message(props){
  return(
    <div className="Message">
      <h1 style ={{color: props.color}}>{props.title}</h1>
    </div>
  );
}

export default Message;
