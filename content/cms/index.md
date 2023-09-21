# Content creation quick guide

Here you can find the basics on how to create content for this portal.

## Workflow

To properly create content with the best experience we recommend following this steps:
1. Use Visual Studio Code
2. Use Markdown Preview Plugin for Visual Studio Code. 
This will provide an inline preview of the rendered content inside the document.
3. (Optional) If you prefer an inline full preview of the site, then we recommend you use **npm** to compile and serve the site or a docker image **TODO**!!!

## Directory structure

The directory structure has been set in a convenient way so no code is mixed with the content.
As a content creator, you should only add, remove or edit files in the **/content directory**

The folder structure will translate directly to the URLs they respond on.

## Menus

Adapting the structure of the menus can easily be done editing **menus.js** in the content folder.

## .MD Files

In those folders, you can add any MarkDown file, **using the .md extension** that will be automatically converted to a nice and standard format.

The options you can use in those files is very extense but you can check our quick guides here:

[MarkDown quick guide](/cms/markdown)

[MarkDown github guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[Mermaid quick guide](/cms/mermaid)

or the full set of options here:

[VitePress documentation](https://vitepress.dev/guide/markdown)


## Customizations

Some advanced customizations can be performed as needed. One example is the usage if an OpenAPI format interpreter we implemented. To use it, you have to add it in you .MD document as follows:

At the beggining of your .MD:

```js
<script setup>
import OpenApiViewer from '@components/OpenApiViewer.vue'
</script>
```

Where you want the content to be shown, then use:

```markdown
<OpenApiViewer url="/dataIntegration.json" />
```