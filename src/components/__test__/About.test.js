import { render } from '@testing-library/react';
import About from '../About';

it('Renders about page', () => {
    const div = document.createElement('div');
    render(<About />, div);
})