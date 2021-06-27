import useFetchGifs from "../../hooks/useFetchGifs";
import '@testing-library/react-hooks';
import { renderHook } from "@testing-library/react-hooks";

describe('Probando hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async () => {
        
        const { result, waitForNextUpdate } = renderHook( ()=>useFetchGifs("One Punch") );
        const {data, loading} = result.current;
        
        await waitForNextUpdate();  
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });
    
    test('Debe retornar un arreglo de imagenes y loading en false', async () => {
        const {result, waitForNextUpdate } = renderHook( ()=>useFetchGifs("One Punch") );

        await waitForNextUpdate();

        const {data, loading} = result.current ;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
        
    });
});