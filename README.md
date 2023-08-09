# PlaywrightWeb

--> Go to terminal and install playwright.
# Run from your project's root directory
npm init playwright@latest

--> Once the playwright is installed, clone the project.
--> tests directory contains both api and web automation.
--> In order to run **api** test only, use following command:
npx playwright test tests/api_tests/crudApi.spec.js

--> In order to run **web** test with specific file name, use following command:
npx playwright test tests/{filename}

--> In order to run **all** the test, use following command:
npx playwright test.
