import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import  Footer  from './Footer';

describe('Testing a Footer Element', () => {
    it('show teste a footer element', () => {
        render(<Footer />);

        const link = screen.getByRole("link");
        expect(link).toBeInTheDocument();       
        expect(link).toHaveProperty("href", "https://github.com/fabiodeandrade");       
       
    });   
    
 
    
})
