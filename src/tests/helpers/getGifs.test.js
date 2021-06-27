import { getGifs } from "../../helpers/getGifs";

describe("Pruebas a getGifs Fetch",  ()=>{
    test("Debe traer al menos 10 elementos", async ()=>{
        const gifs = await getGifs("One push");
        expect(gifs.length ).toBe(10);
    });

    test("Si no recibe argumentos", async ()=>{
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
})