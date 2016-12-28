import { Map } from './map.model';


describe('maps/', () => {
  describe('Map', () => {
    it('should set title', () => {
      expect(new Map('test').title).toBe('test');
    });

    it('should set completed to false by default', () => {
      expect(new Map('test').completed).toBe(false);
    });
  });
});
