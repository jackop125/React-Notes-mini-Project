import NotesList from "./NoteList";
const NotesContainer = (props) => {
    
    return (
      <div className="d-flex flex-wrap">
        {props.Data.map((data,index) => {
          return <NotesList details={data} key={index} id={index} delfun={props.updateData}/>;
        })}
      </div>
    );
  };
  export default NotesContainer;