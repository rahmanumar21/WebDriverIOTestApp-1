describe('Google Page', async () => {

          it('should open the URL and verify the title', async () => {

                    await browser.url("https://google.com/");
                    let checkURI = await browser.getUrl();

                    // expect to have url
                    expect(checkURI).toHaveUrl("https://google.com/");

          });

});