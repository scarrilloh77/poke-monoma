# Getting Started

To get started, follow these steps:

1. **Run the Development Server:**

   Use one of the following commands to start the development server:

   ```bash
   npm run dev
   ```

2. **Customize the Port:**

   Currently, Next.js does not support port customization directly from a `.env` file. To change the port, you can do so by modifying the `package.json` script as follows:

   ```json
   "dev": "next dev -p 3005"
   ```

   Alternatively, you can specify the port in the run command:

   ```bash
   npm run dev -- -p 3005
   ```

3. **Update Cypress Configuration:**

   If you modify the port, you should also update the port in your `cypress.config.ts` file:

   ```javascript
   export default defineConfig({
     viewportWidth: 1366,
     viewportHeight: 900,
     e2e: {
       testIsolation: false,
       baseUrl: 'http://localhost:3005', // Update the port here
       setupNodeEvents(on, config) {
         // implement node event listeners here
       },
     },
   });
   ```

   Ensure that the `baseUrl` property in your Cypress configuration matches the port you set in your Next.js development server.

4. **Run End-to-End Tests with Cypress:**

   To execute end-to-end tests using Cypress, follow these steps:

   - First, ensure that your development server is running by using the command mentioned in step 1.

   - Then, you can run the Cypress tests by executing either of the following commands:

     ```bash
     npm run cypress
     # or
     npx cypress run
     ```

   Make sure your development server is up and running before initiating the Cypress tests.
