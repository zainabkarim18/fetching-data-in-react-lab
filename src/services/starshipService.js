const BASE_URL = 'https://swapi.dev/api/starships/';

const show = async (searchship) =>{
    try {
        const queryString = `?search=${searchship}`;
        const res = await fetch(BASE_URL + queryString);

        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }

        const data = await res.json();
        console.log('Data:', data);
        
        return data.results;
        
    } catch (err) {
        console.log(err);
    }
}

export { show };