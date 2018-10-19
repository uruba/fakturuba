import IGenerator from '@fakturuba/interfaces/generator/IGenerator';
import IInput from '@fakturuba/interfaces/input/IInput';
import ITemplatingProcessor from '@fakturuba/interfaces/templating/ITemplatingProcessor';
import {Browser, launch} from 'puppeteer';

export default class PdfGenerator implements IGenerator {
    public async generate(input: IInput, templatingProcessor: ITemplatingProcessor, ...inputArgs: any): Promise<void> {
        const content = await input.read(inputArgs);

        const browser = await this.initBrowser();
        await this.loadPage(browser, content);
        await this.closeBrowser(browser);
    }

    private async initBrowser(): Promise<Browser> {
        return launch({args: ['--no-sandbox']});
    }

    private async closeBrowser(browser: Browser): Promise<void> {
        return browser.close();
    }

    private async loadPage(browser: Browser, content: string) {
        const page = await browser.newPage();

        await page.setContent(content);
        await page.pdf({path: 'test.pdf', format: 'A4'});
    }
}
