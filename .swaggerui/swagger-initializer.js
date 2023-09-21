window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    // url: "definitions/task_api_callback/task_api.yaml",
    urls: [
      { url: "../content/api/taskManagement/taskManagement.yaml", name: "taskManagement" },
      { url: "../content/api/dataIntegration/dataIntegration.json", name: "dataIntegration" },
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    defaultModelsExpandDepth: 2,
    defaultModelRendering: 'model',
    docExpansion: 'full',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
