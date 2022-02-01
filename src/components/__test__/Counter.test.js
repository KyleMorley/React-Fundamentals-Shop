import ReactDom from 'react-dom'
import { render } from '@testing-library/react'
import Counter from '../Counter'


it('Renders counter', () => {
    const div = document.createElement('div');
    render(<Counter />, div)
})