import { useEffect, useState } from "react"
import BlogList from "../BlogList/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState('')
    const handleDelete = (id)=> {
        const newBlogs = blogs.filter((blog)=>{
           return( blog.id !== id)
        })
        setBlogs(newBlogs)
    }

    useEffect(()=> {
        const getData = async()=>{
           const getAll =  fetch('http://localhost:8000/blogs')
           const resp = await(getAll)
           console.log(resp)
        
     }
     getData()
    }, [])

    return ( 
        <div className="home">
           <BlogList  blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
           {/* <BlogList  blogs={blogs.filter((blog)=>{
            return(
                blog.author === 'Kings'
            )
           })} title="Kings Post"/> */}

        </div>
     );
}
 
export default Home;
// const Home = () => {
//     const [name, setName] = useState('Kings') 
//     const [age, setAge] = useState(25)
    
//     const handleClick = ()=>{
//         console.log('Hello Kings')
//         setName('Ikemba')
//         setAge(30)

//     }

//     const handleClickAgain = (name)=>{
//         console.log('Hello ' + name)
//     }

//     return ( 
//         <div className="home">
//             <h2>
//                 Home page
//             </h2>
//             <p>{name} is {age} old</p>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={()=> {
//                 return handleClickAgain('love')
//             }}>Click me</button>

//         </div>
//      );
// }
 
// export default Home;