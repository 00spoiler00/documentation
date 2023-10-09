# UVE Developer Portal

This project is designed to empower all programmers and users within the company to easily and practically generate manuals and any type of content geared towards documentation. The tools at your disposal for this purpose are the MarkDown language, spiced up with Mermaid to easily allow the creation of embedded text defined graphs. Additionally, a component is provided to render any OpenAPI specification inside your docs.

The public site where this will be published is [https://dev.uve.ai](https://dev.uve.ai)

Note that primary content editing or creation should only be done on the documents located within the **content** folder.

** NOTE: This repo is GitFlow enabled **

## How to start creating content

1. Download the repo
2. Make sure you have **nodeJs** installed [Instructions](https://nodejs.org/en/download)
3. Go to the project root folder 
4. Run `npm i` to install dependencies
5. Run `npm run updateDynamicContent` to update dynamic content locally. Not required but recommended
6. Run `npm run docs:dev` to preview in realtime the final site
7. **Open http://localhost:5173/creators and discover how to create content**.
8. Edit the content
9. Commit your changes as usual and let the automation publish the changes to https://dev.uve.ai