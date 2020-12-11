 export const getGifs = async (category) => {
        
        
        const url = `https://api.giphy.com/v1/gifs/search?api_key=PmYoyrNJUlptKppYJNhajYVh7S70R2xk&q=${ encodeURI(category) }&limit=10&offset=0&rating=g&lang=es`;

        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifs = data.map((gif) => {
            return (
                {
                    id: gif.id,
                    title: gif.title,
                    url: gif.images?.downsized.url
                }
            )
        });
        console.log(gifs);
     return gifs;
    }
