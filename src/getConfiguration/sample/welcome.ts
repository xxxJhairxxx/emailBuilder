import { TEditorConfiguration } from "../../documents/editor/core";

const WELCOME: TEditorConfiguration = {
  root: {
    type: "EmailLayout",
    data: {
      backdropColor: "#F5F5F5",
      canvasColor: "#FFFFFF",
      textColor: "#262626",
      fontFamily: "MODERN_SANS",
      childrenIds: [
        "block-1742600656908",
        "block-1742600659972",
        "block-1742600663972",
        "block-1742600746803",
      ],
    },
  },
  "block-1742600656908": {
    type: "Heading",
    data: {
      props: {
        text: "Hello friend",
      },
      style: {
        padding: {
          top: 16,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
    },
  },
  "block-1742600659972": {
    type: "Text",
    data: {
      style: {
        fontWeight: "normal",
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "If you already have an image that you would like to use for a favicon on your website the this is the tool you need. The favicon generator will convert you image to a favicon. You can upload a PNG, JPG, or BMP and the favicon generator will output an ICO file.\n\nFor the best result you should upload an square image. You can use a standard image editing tool if you need to crop your image. Once your image is prepared upload it using the tool above. Next, verify that the preview image is to your liking. Finally, use the download button to export your favicon in ICO format.",
      },
    },
  },
  "block-1742600663972": {
    type: "Image",
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
        textAlign: "center",
      },
      props: {
        width: 400,
        url: "https://assets.usewaypoint.com/sample-image.jpg",
        alt: "Sample product",
        linkHref: null,
        contentAlignment: "middle",
      },
    },
  },
  "block-1742600746803": {
    type: "ColumnsContainer",
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        columnsCount: 3,
        columnsGap: 16,
        columns: [
          {
            childrenIds: [],
          },
          {
            childrenIds: [],
          },
          {
            childrenIds: ["block-1742600749819"],
          },
        ],
      },
    },
  },
  "block-1742600749819": {
    type: "Button",
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        buttonBackgroundColor: "#2563EB",
        text: "ir a enlace",
        url: "https://www.usewaypoint.com",
      },
    },
  },
};

export default WELCOME;
