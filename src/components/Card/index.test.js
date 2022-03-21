import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import  UserCard  from './index';

describe('Testing a UserCard element', () => {
    it('should show a userCard in screen', () => {
        render(<UserCard />);

        const link = screen.getByRole("link");
        expect(link).toBeInTheDocument();       
        expect(link).toHaveProperty("href", "https://github.com/fabiodeandrade");       
       
    });   
    
 
    
})
