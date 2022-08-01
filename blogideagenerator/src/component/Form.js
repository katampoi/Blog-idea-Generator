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
       const [searchValue, setsearchValue] = useState([]);
       useEffect(() => {
       fetch("http://localhost:8000/posts")
         .then((r) => r.json())
         .then((data) => {
           data.array.forEach(element => {
            console.log(element)
           });;
         });
     }, []);
     console.log(posts)
     const postsList = posts.filter((val)=>{
        if(searchValue === ""){
            return val;
        }else if(val.title.toLowerCase().includes(searchValue.toLowerCase())){
            return val;
        }
      }).map((doc)=>(
        <h3 key={doc._id}>{doc.title}</h3>
        
      ))
    // const test= posts.map((result)=> (
    //     <h3 key={result.id}>
    //       {result.title}
    //     </h3>
    //  ))
    


  return (
    <div className='form'>
        <form className='formcontent'>
            <input
            onChange={(event)=>setsearchValue(event.target.value)}
            // value={values.blogName}
            className='formField'
            placeholder='Blog Name/Topic'
            name='blogName'
            /> <br/>

            {/* <input
            onChange={handledescriptionInputChange}
            value={values.description}
            className='formField'
            placeholder='Description of your Blog'
            name='description'
            /> */}
        </form>
        {postsList}

      
    </div>
  )
}

export default Form
