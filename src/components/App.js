import React from 'react';
import {useEffect, useState} from 'react';

function App() {

    const [dogPicture, setDogPicture] = useState("");
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(()=>{
        const fetchDogPictures = async () => {
            try {
                const response = await fetch("https://dog.ceo/api/breeds/image/random")
                const json = await response.json();
                setDogPicture(json.message);
                setIsLoaded(false);
            }
            catch(error){
                console.error(error);
            }
        };
        fetchDogPictures();
    }, []);
 
    return (
        <>
            {isLoaded ? <p>Loading...</p> : <img src={dogPicture} alt="A Random Dog"/>}
        </>
    )
}

export default App;