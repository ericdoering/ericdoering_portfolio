import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "xsvj9bid",
    dataset: "production",
    title: "personal portfolio",
    apiVersion: "2023-05-13",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: schemas
    }
})


export default config;