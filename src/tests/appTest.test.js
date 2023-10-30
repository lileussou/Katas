import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

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
        const myRoverImgsLength = screen.getAllByAltText('roverMarsImg').length;
        await screen.findByRole('rover')
        await screen.findByRole('marsMap')
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"longitude":1,"latitude":1,"facing":"N"}')
        expect(screen.getByRole('marsMap')).toHaveTextContent('{"longitude":4,"latitude":4}');
        expect(myMapImgs).toHaveLength(16 - myRoverImgsLength);
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

    test('move the rover to move forward', async () => {
        //ARRANGE
        act(() => {
            render(<App />)
        })
        //ACT
        await screen.findByRole('rover')
        act(() => {
            userEvent.click(screen.getByAltText('upArrow'))
        })
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"longitude":1,"latitude":2,"facing":"N"}')
    })

    test('First snapshot Test', () => {
        const component = renderer.create(
            <App />
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot(); 
    })
})