import React, { useState,useEffect } from 'react'
function Form() {
    // const [values, setValues] = useState({
    //    blogName:"",
    //    description:"",
    // });
    // const handleBlogNameInputChange = (event) => {
    //     setValues({...values, blogName: event.target.value})
    // }
    // const handledescriptionInputChange = (event) => {
    //     setValues({...values, description: event.target.value})
    // }
    const [ posts,setPosts] = useState([]);
       const [searchValue, setSearchValue] = useState("");
       useEffect(() => {
       fetch("http://localhost:8000/posts")
         .then((r) => r.json())
         .then((data) => setPosts(data));
     }, []);
     console.log(posts)
     const postsList = posts.filter((val)=>{
        if(searchValue === ""){
            return val;
        }else if(val.title.toLowerCase().includes(searchValue.toLowerCase())){
            return val;
        }
      }).map((doc)=>(
        <h3 key={doc.id}>{doc.title} {doc.idea}</h3>
      ))
    // const test= posts.map((result)=> (
    //     <h3 key={result.id}>
    //       {result.title}
    //     </h3>
    //  ))
  return (
    <div className='form'>
            <input
            type="text"
            onChange={(event)=>setSearchValue(event.target.value)}
            className='formField'
            placeholder='Blog Name/Topic'
            />
        {postsList}
    </div>
  )
}
export default Form