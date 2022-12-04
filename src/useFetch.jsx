import  { useEffect, useState } from 'react';
 const mainUrl = "https://www.omdbapi.com/?apikey=";

function useFetch(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        show:false,
        msg:""
    });


    const fetchMovies = async () =>{
        setLoading(true);
        let url = `${mainUrl}${process.env.REACT_APP_ACCESS_KEY}${query}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if(data.Response === "True"){
                setMovies(data.Search || data);
            }else{
                setError({
                    show:true,
                    msg:data.Error
                });
            }
            setLoading(false);
            
           
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    },[query])
  return ({movies, loading, error}  )
}

export default useFetch