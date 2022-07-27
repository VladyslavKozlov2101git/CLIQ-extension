

export interface Hero {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: any[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;

}


export async function getData(user: number): Promise<Hero> {
    const response = await fetch(`https://swapi.dev/api/people/${user}/`);

    const data: Hero = await response.json();
    return data;
}

export async function getBlob(key: string): Promise<any> {
    const response = await fetch(`http://api.chaincliq.4-com.pro/ad?key=${key}`);
    return response;
}




