import {JaxDemoPage} from './app.po';

describe('jax-demo App', () => {
    let page: JaxDemoPage;

    beforeEach(() => {
        page = new JaxDemoPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
