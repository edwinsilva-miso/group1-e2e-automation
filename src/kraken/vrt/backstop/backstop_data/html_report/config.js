report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Visualizar_Post_0_document_0_default.png",
        "test": "../bitmaps_test/20231119-130744/backstop_default_Visualizar_Post_0_document_0_default.png",
        "selector": "document",
        "fileName": "backstop_default_Visualizar_Post_0_document_0_default.png",
        "label": "Visualizar Post",
        "requireSameDimensions": true,
        "misMatchThreshold": 8,
        "url": "http://localhost:3002/ghost/#/posts",
        "referenceUrl": "http://localhost:2368/ghost/#/posts",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});