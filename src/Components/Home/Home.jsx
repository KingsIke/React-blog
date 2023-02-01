// import { useEffect, useState } from "react";
import BlogList from "../BlogList/BlogList";
import IconLoading from "../IconLoading/IconLoading";
import useFetch from "../Usefetch/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch("http://localhost:8000/blogs");
  //   const [data, setdata] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  //   const handleDelete = (id) => {
  //     const newdata = data.filter((blog) => {
  //       return blog.id !== id;
  //     });
  //     setdata(newdata);
  //   };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       fetch("http://localhost:8000/blogs")
  //         .then((res) => {
  //           if (!res.ok) {
  //             throw Error("could not fetch the data from the network");
  //           }
  //           console.log(res);
  //           return res.json();
  //         })
  //         .then((data) => {
  //           setdata(data);
  //           setLoading(false);
  //         })
  //         .catch((error) => {
  //           console.log(error.message);
  //         });
  //     }, 1000);
  //   }, []);

  return (
    <div>
      {loading ? (
        <div>
          <IconLoading />
          {error && <div> {error} </div>}
        </div>
      ) : (
        <div className="home">
          {data && <BlogList blogs={data} title="All Blogs" />}
        </div>
      )}
    </div>
  );
};

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
