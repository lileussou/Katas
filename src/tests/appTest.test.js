import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../App';

describe('test roverMars comportment in DOM', () => {
    test('rover is at initial position', async () => {
        //ARRANGE
        render(<App />)
        //ACT
        await screen.findByRole('heading')
        //ASSERT
        expect(screen.getByRole('heading')).toHaveTextContent('{"latitude":1,"longitude":1,"facing":"N"}')
    })
})