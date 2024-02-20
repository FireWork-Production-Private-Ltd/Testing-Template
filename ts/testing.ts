import { Page } from 'playwright';

import { SITE } from './config';




async function mediaUpload(page: Page, fileName: string): Promise<void> {

	await page.goto(`${SITE.BASEURL}wp-admin/upload.php`);

	await page.click('text="Add New Media File"');

    const switchToMultiUploaderLink = page.getByRole('link', { name: 'Switch to the multi-file' });

	if(await switchToMultiUploaderLink.isVisible()) {

		await switchToMultiUploaderLink.click();

	}

	const [fileChooser] = await Promise.all([

		page.waitForEvent( 'filechooser' ),

		page.getByRole('button', { name: 'Select Files' }).click(),

	])

	await fileChooser.setFiles([ `uploads/${fileName}` ]);

}




export default mediaUpload;
