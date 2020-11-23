## Folder Structure
- src
    - components
    - pages

In the src folder, we created 2 folder where we put <b>common components</b> and <b>pages</b>.

## Set Folders BaseUrl
1. Create a file name "jsconfig.json" in root folder.
2. Add this code in the file (Workcase in rules 5 of "what to do" section)
    ```json
    {
      "compilerOptions": {
        "baseUrl": "src"
      }
    }
    ```

## What to do
To keep our project clean and minimal we will follwow some rules or pettern.
1. Follow the folder structure.
2. Create all common component's like Button, Card, Table, Menu item in components folder.
3. Create all page component's like Homepage, Cartpage, SingleProductPage in pages folder.
4. All utilities under utils folder.
5. When you import any component or file, like you are trying to import Homepage from pages folder. Use this pettern "pages/Home.js"

## What not to do
Sometimes bad practice can bring you a lot of pain which can push you away from the track.
1. Don't use index.js in all components folder. It can messed up your code editors tab and decrease your productivity.
2. Try not to use "../" to import components. Sometime it gets harder to find the file by following the path.