import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Form(){

  const dispatch = useDispatch();
  
  const formData = useSelector((state)=>{
    return state.form;
  })

  const handleNameChange = (event)=>{
    dispatch({type:'form/modifyName',payload:event.target.value});
  }

  const handleTitleChange =(event)=>{
    dispatch({type:'form/modifyTitle',payload:event.target.value});
  }

  const onFormSubmit = (event)=>{
    event.preventDefault();
    console.log(`Form has been Submitted with Name:${formData.name} & Title:${formData.title}`);
  }

  return(
    <form onSubmit={onFormSubmit}>
      <div>
        <label>Name:</label>
        <input value={formData.name} onChange={handleNameChange} />
      </div>
      <div>
      <label>Title:</label>
      <input value={formData.title} onChange={handleTitleChange} />
      </div>
      <button onClick={onFormSubmit}>Submit</button>
    </form>
  )
}

export default Form;