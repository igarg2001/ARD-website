# ard-website

## Folder structure

### assets
Stores all fonts, images, svgs etc

### components
Stores reusable components like buttons, input fields, lists etc.

### middlewares
This directory closely works with vue router. You can store your navigation guards inside this folder.

### plugins
Stores plugins (may or may not be required)

### router
Stores all files related to vue-router

### services
Stores servies like API Connection service. (May not be needed)

### store
Stores vuex(global state management) related information

### views
Stores all views(or pages). Each view is an entry point to the corresponding route defined in the application.

## Entry point of the application is App.vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
