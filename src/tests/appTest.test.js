import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

import roverMarsImg from '../image/roverMarsImg.png';
import App from '../App';

describe('test roverMars comportment in DOM', () => {
    test('rover is at initial position', async () => {
        //ARRANGE
        render(<App />)
        //ACT
        await screen.findByRole('rover')
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"longitude":1,"latitude":1,"facing":"N"}')
    })

    test('rover is at initial position with img', async () => {
        //ARRANGE
        render(<App />)
        //ACT
        const myRoverImg = screen.getByAltText('roverMarsImg')
        await screen.findByRole('rover')
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"longitude":1,"latitude":1,"facing":"N"}')
        expect(myRoverImg.src).toContain(roverMarsImg)
    })

    test('rover is at initial position with img', async () => {
        //ARRANGE
        render(<App />)
        //ACT
        const myRoverImg = screen.getByAltText('roverMarsImg')
        await screen.findByRole('rover')
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"longitude":1,"latitude":1,"facing":"N"}')
        expect(myRoverImg.src).toContain(roverMarsImg)
    })

    test('create a 4 x 4 map', async () => {
        //ARRANGE
        render(<App />)
        //ACT
        const myRoverImg = screen.getByAltText('roverMarsImg')
        await screen.findByRole('rover')
        await screen.findByRole('marsMap')
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"longitude":1,"latitude":1,"facing":"N"}')
        expect(screen.getByRole('marsMap')).toHaveTextContent('{"longitude":4,"latitude":4}');
        expect(myRoverImg.src).toContain(roverMarsImg)
    })

    
    test('implement the 4 x 4 map and the rover', async () => {
        //ARRANGE
        render(<App />)
        //ACT
        const myMapImgs = screen.getAllByAltText('mapMarsImg');
        await screen.findByRole('rover')
        await screen.findByRole('marsMap')
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"longitude":1,"latitude":1,"facing":"N"}')
        expect(screen.getByRole('marsMap')).toHaveTextContent('{"longitude":4,"latitude":4}');
        expect(myMapImgs).toHaveLength(15);
    })

        
    test('rotate the rover to East', async () => {
        //ARRANGE
        act(() => {
            render(<App />)
        })
        //ACT
        await screen.findByRole('rover')
        act(() => {
            userEvent.click(screen.getByAltText('rightArrow'))
        })
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"longitude":1,"latitude":1,"facing":"E"}')
    })
})