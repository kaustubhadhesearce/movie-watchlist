import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjI2YmI5OGFlMGE4ZDg5YTFiM2ZhOWZmNDkxMjExZSIsInN1YiI6IjY0YmUwODlhZWI3OWMyMDBlMjhlMDA4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qi9AycxZsc6sJ5iQpapTpssZOUvnnTEXN30GvsxMl1g'
        }
      };

    useEffect(()=>{
        fetch(url,options)
            .then(res =>{
                if(!res.ok){
                    throw Error("could not fetch trending movies data")
                }
                return res.json()
            })
            .then(data=>{
                console.log(data);
                setData(data.results);
            });
      },[url]);

    return {data};
}
 
export default useFetch;