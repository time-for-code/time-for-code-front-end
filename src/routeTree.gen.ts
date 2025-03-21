/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const LoginLazyImport = createFileRoute('/login')()
const HomeLazyImport = createFileRoute('/home')()
const ExerciseLazyImport = createFileRoute('/exercise')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const HomeLazyRoute = HomeLazyImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/home.lazy').then((d) => d.Route))

const ExerciseLazyRoute = ExerciseLazyImport.update({
  id: '/exercise',
  path: '/exercise',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/exercise.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/exercise': {
      id: '/exercise'
      path: '/exercise'
      fullPath: '/exercise'
      preLoaderRoute: typeof ExerciseLazyImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/exercise': typeof ExerciseLazyRoute
  '/home': typeof HomeLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/exercise': typeof ExerciseLazyRoute
  '/home': typeof HomeLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/exercise': typeof ExerciseLazyRoute
  '/home': typeof HomeLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/exercise' | '/home' | '/login' | '/register'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/exercise' | '/home' | '/login' | '/register'
  id: '__root__' | '/' | '/exercise' | '/home' | '/login' | '/register'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ExerciseLazyRoute: typeof ExerciseLazyRoute
  HomeLazyRoute: typeof HomeLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ExerciseLazyRoute: ExerciseLazyRoute,
  HomeLazyRoute: HomeLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/exercise",
        "/home",
        "/login",
        "/register"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/exercise": {
      "filePath": "exercise.lazy.jsx"
    },
    "/home": {
      "filePath": "home.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
