import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import roverMarsImg from '../image/roverMarsImg.png';
import App from '../App';

describe('test roverMars comportment in DOM', () => {
    test('rover is at initial position', async () => {
        //ARRANGE
        render(<App />)
        //ACT
        await screen.findByRole('rover')
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"latitude":1,"longitude":1,"facing":"N"}')
    })

    test('rover is at initial position with img', async () => {
        //ARRANGE
        render(<App />)
        //ACT
        const myRoverImg = screen.getByAltText('roverMarsImg')
        await screen.findByRole('rover')
        //ASSERT
        expect(screen.getByRole('rover')).toHaveTextContent('{"latitude":1,"longitude":1,"facing":"N"}')
        expect(myRoverImg.src).toContain(roverMarsImg)
    })
})