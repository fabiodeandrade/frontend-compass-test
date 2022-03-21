import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import  DefaultLayout  from './index';

describe('Testing BestServices component', () => {
    it('should show a message in footer to confirm a render default', () => {
        render(<DefaultLayout />);

        const footerMessage = screen.getByText("Desenvolvido por");
        expect(footerMessage).toBeInTheDocument();       
       
    });   

    it('should show a developer link', () => {
        render(<DefaultLayout />);

        const devProfileLink = screen.getByRole("link");
        expect(devProfileLink).toBeInTheDocument();   
        expect(devProfileLink).toHaveTextContent('Fábio de Andrade');
        expect(devProfileLink).toHaveProperty('href', 'https://github.com/fabiodeandrade');
        
       
    });   
 
    
})