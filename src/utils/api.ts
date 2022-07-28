

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

export function findAllAdBlocks(selector = '#cliq-ad') {
    return document.querySelectorAll(selector);
}


export async function getData(user: number): Promise<Hero> {
    const response = await fetch(`https://swapi.dev/api/people/${user}/`);

    const data: Hero = await response.json();
    return data;
}

export async function getBlob(key: string, setContentType: any): Promise<any> {
    const response = await fetch(`http://api.chaincliq.4-com.pro/ad?key=${key}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-cache',
        mode: 'cors'
    });
    const headers = await response.headers.get('content-type');
    
    headers && setContentType(headers);
   
    const blob = await response.blob();
    return URL.createObjectURL(blob);
}

export function main(mediaHTMLObject) {


    // Find all divs with id cliq-ad
    const adDivs = findAllAdBlocks();
    console.log(adDivs, 777)
    // For each div
    adDivs.forEach(async (adDiv) => {

        adDiv.appendChild(mediaHTMLObject);
    });
}



