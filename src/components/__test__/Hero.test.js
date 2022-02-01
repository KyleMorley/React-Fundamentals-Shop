import { render } from '@testing-library/react';

import Hero from '../Hero';

it('Renders Hero section', () => {
    const div = document.createElement('div');
    render(<Hero />, div)
})