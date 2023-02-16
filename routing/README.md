# Next.js Pages and file based routing

## File-Based Routing:

- Each page is represented by a file.
- `pages` directory should include an `index.js` file to represent the root URL `/` route.

<br/>

### **Static Route:**

To create a route with a specific file name, you must create a file with a `.js` or `.tsx` extension inside the pages directory.
<br/>
For example, if you create a file named `about.js` in the `pages` directory, Next.js will automatically create a route for that page at `/about`.

Another way to create a static route is by creating a folder with the desired path name and an `index.js` file inside it.
<br/>
For example, to create a route for `/portfolio`, you can create a folder named `portfolio` inside the `pages` directory and add an `index.js` file inside it.

_Note:_ Casing of static file paths should be in lowercase.

<br/>

### **Nested Path:**

To create a nested route, create another .js file in a folder within the pages directory.
<br/>
For example, creating another `.js` file, such as `list.js`, within the portfolio folder allows the URL to be accessed as `/portfolio/list`.

<br/>

### **Dynamic Routes:**

To create a dynamic route, create a file with square brackets in the filename such as [id].js. This will create a route that can match any value within the brackets, such as `/client/tesla` or `/client/google`. Here the key `id` will have the value `tesla` or `google`.

_Note:_ If the `client` folder contains a file named `list.js` along with `[id].js`, the former will be considered a static route with the path `client/list`.

In a dynamic route, the query parameters are not case sensitive. You can use camel case, such as `clientId`, for the parameter name. This can make the parameter name more readable and easier to understand.

**Extracting Dynamic Path Segment Data:**
By using `useRouter` hook from `next/router`, we can extract values such as pathname or query.

```js
import { useRouter } from "next/router";

const ClientDetailPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query.clientId);

  return <h1>Client Detail Page</h1>;
};

export default ClientDetailPage;
```

<br/>

### **Nested Dynamic Routes:**

By creating a dynamic folder or file within a nested dynamic folder, we can create routes with multiple dynamic segments that can change dynamically based on user input.

For example, to create the `/client/[clientId]/[projectId]` route, we need to create a `projectId.js` file inside the `[clientId]` folder, or an `index.js` file within the `[projectId]` folder inside the `[clientId]` folder under the `client` folder. Both `clientId` and `projectId` can be extracted from query params.

<br/>

### **Catch All Routes:**

A catch-all route is used to match dynamic routes with variable paths. It's indicated by using three dots `(...)` followed by a parameter name in the file name inside a folder within the `pages` directory.

For example, with the `/blog/[...slug].js` folder structure, the `slug` parameter will contain an array of path segments. For instance, for the URL `/blog/2023/02/15/sample-blog`, the slug parameter will be `['2023', '02', '15', 'sample-blog']`.

_Note:_ If the `blog` folder contains a file named `list.js` along with `[...slug].js`, the former will be considered a static route with the path `blog/list`.

Instead of using a file named `[...slug].js`, you can create a folder named `[...slug]` and place an `index.js` file inside it. If there is another file called `list.js` inside the `[...slug]` folder, `blog/list` will be treated as a catch-all route with the path `blog/[...slug]` and the server will throw an error with the message `Error: Catch-all must be the last part of the URL.`
