import "./CreateNotes.css";
import React, { useState } from "react";

const CreateNotes = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetails, setInputDetails] = useState("");

  const updateTitle = (event) => {
    setInputTitle(event.target.value);
  };
  const updateDetails = (event) => {
    setInputDetails(event.target.value);
  };
  const AddDataToNotes = () => {
    props.updateData((prevData) => {
      return [{ NoteTitle: inputTitle, NoteData: inputDetails }, ...prevData];
    });
    setInputTitle("");
    setInputDetails("");
  };

  const ClearInputFields = ()=>{
      setInputTitle("");
      setInputDetails("");
  }
  return (
    <div className="col-10 col-md-6 col-lg-4 create_note_container">
      <div className="row">
        <input
          className="col-12 input_Add_Title"
          type="text"
          placeholder="Title"
          onChange={updateTitle}
          value={inputTitle}
        />
        <textarea
          className="col-12 input_Add_Notes"
          placeholder="Add Notes Here....."
          onChange={updateDetails}
          value={inputDetails}
        ></textarea>
      </div>
      <button
        className="btn btn-warning Add_Notes_btn"
        onClick={AddDataToNotes}
      >Add</button>
      <button className="btn btn-danger Clear_Notes_btn" onClick={ClearInputFields}> Clear </button>
    </div>
  );
};

export default CreateNotes;
