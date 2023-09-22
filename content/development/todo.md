# TODOs

## NOW:
- Create Repo!
- Create a script to convert Nomenclators to MDs:
~~1. Download the JSON, ~~
2. Clean content (later, user an easier json from UVEAPI)
~~3. Create markdown files for each nomenclator and place them into /content/nomenclators/dynamic/recordDefinitions/xxx.md~~
~~4. Create a markdown file, named /content/nomenclators/dynamic/recordDefinitions/all.md, containing nested MD files for all chunks~~

- Create the daily cron that performs builds dynamic content

- Hide internal tutorials from menus based on some criteria
- Test and expand the content creator experience (only VSCode and Full NPM tutorial)
- Create Docker image and AKS integration 
- Create a local express.js server to serve the Swagger content and detach infrastructure dependencies. Solve CORS on it
- Hide swagger toolbar
- Add dark theme to swagger https://dev.to/amoenus/turn-swagger-theme-to-the-dark-mode-4l5f
- Sync swagger theme to VuePress
- Add contents from consultores documents, translated if required.


~~- Add Look&Feel (Logo&Favicon&Montserrat)~~
~~- Reorganize content and create the ETL/SipIn section (submenu?) with an 'All records' and a demo 'Type 1', 'Type 2'~~
~~- Create a /ETL/SipIn/Custom/Customer1 (not visible/not searchable) as a demo~~

~~- Explain how the records system works in the content creator area~~
~~- Create aliases of components for easy loading~~
~~- Create a global component for Swagger integration (<OpenAPI url="" />), It must render and format properly the IFrame, It must accept n 'url' parameter that will be passed URL encoded to the IFrame~~
~~- Create a server for the swagger~~
~~- Parse all ````<OpenApiViewer>```` and all ````<!--@include: @/openapi/basics.md-->````.~~
~~- Download specs and download and transform includes~~
~~- Migrate task api to mermaid schema~~
~~- Search box~~
~~- Talk to Estanis for the deployment of all of this. Unil then, use your own repo~~
~~- Create the MD transformed Nomenclator contents in UveAPI~~

## TBD
- Add documate and AI support? [Documate](https://documate.site/integration/vitepress#mannually-add-to-existing-project)
- I18N required?