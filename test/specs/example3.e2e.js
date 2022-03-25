describe('Google Page 3', () => {

          it('should enter and search', () => {

                    browser.url("https://google.com/");

                    // declare search form
                    let searchForm = $("//input[contains(@name, 'q')]");

                    // execute
                    searchForm.addValue("WebdriverIO");

                    // expect
                    expect(searchForm).toHaveText("WebdriverIO");

          });

});