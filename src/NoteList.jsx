
const NotesList = (props) => {

  const DeleteData = () => {
    props.delfun((prevData) => {
      return prevData.filter((val, index) => index !== props.id);
    });
  };


  return (
    <>
      

      <div className="col-lg-2 col-md-3 col-sm-4 Note_container">
        <h4 className="Note_title">{props.details.NoteTitle}</h4>
        <hr />
        <p className="Note_Data">{props.details.NoteData}</p>
        <button className="btn btn-outline-danger ms-1" onClick={DeleteData}>
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
    </>
  );
};

export default NotesList;
