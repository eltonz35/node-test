import { Math } from './Math';

describe('testing Math libary', () => {
    it('should sum two numbers correctly', () => {
        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    });

    it('should subtract two numbers correctly', () => {
        const response = Math.sub(8, 2);
        expect(response).toBe(6);
    });

    it('should multiply two numbers correctly', () => {
        const response = Math.mut(3, 5);
        expect(response).toBe(15);
    });

    it('shold divide two numbers correctly', () => {
        const response = Math.div(8, 2);
        expect(response).toBe(4);
    });
});