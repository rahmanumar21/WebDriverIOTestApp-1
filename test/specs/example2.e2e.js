describe('Google Page', async () => {

          it('should open the URL and verify the title', async () => {

                    await browser.url("https://google.com/");
                    await browser.getUrl();

                    // expect to have url
                    expect(browser).toHaveUrl("https://google.com/");

          });

});