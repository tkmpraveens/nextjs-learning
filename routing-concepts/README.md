# Next.js Pages and file based routing

### Live
[nextjs-learning-routing-concepts.netlify.app](https://nextjs-learning-routing-concepts.netlify.app)

## File Based Routing:

- Each page is represented by a file.
- `pages` directory should include an `index.js` file to represent the root URL `/` route.

<br/>

### Static Routes:

To create a route with a specific file name, you must create a file with a `.js` or `.tsx` extension inside the pages directory.
<br/>
For example, if you create a file named `about.js` in the `pages` directory, Next.js will automatically create a route for that page at `/about`.

Another way to create a static route is by creating a folder with the desired path name and an `index.js` file inside it.
<br/>
For example, to create a route for `/portfolio`, you can create a folder named `portfolio` inside the `pages` directory and add an `index.js` file inside it.

_Note:_ Casing of static file paths should be in lowercase.

<br/>

### Nested Paths:

To create a nested route, create another .js file in a folder within the pages directory.
<br/>
For example, creating another `.js` file, such as `list.js`, within the portfolio folder allows the URL to be accessed as `/portfolio/list`.

<br/>

### Dynamic Routes:

To create a dynamic route, create a file with square brackets in the filename such as [id].js. This will create a route that can match any value within the brackets, such as `/client/tesla` or `/client/google`. Here the key `id` will have the value `tesla` or `google`.

_Note:_ If the `client` folder contains a file named `list.js` along with `[id].js`, the former will be considered a static route with the path `client/list`.

In a dynamic route, the query parameters are not case sensitive. You can use camel case, such as `clientId`, for the parameter name. This can make the parameter name more readable and easier to understand.

**Extracting Dynamic Path Segment Data:**<br/>
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

### Nested Dynamic Routes:

By creating a dynamic folder or file within a nested dynamic folder, we can create routes with multiple dynamic segments that can change dynamically based on user input.

For example, to create the `/client/[clientId]/[projectId]` route, we need to create a `projectId.js` file inside the `[clientId]` folder, or an `index.js` file within the `[projectId]` folder inside the `[clientId]` folder under the `client` folder. Both `clientId` and `projectId` can be extracted from query params.

<br/>

### Catch-All Routes:

A catch-all route is used to match dynamic routes with variable paths. It's indicated by using three dots `(...)` followed by a parameter name in the file name inside a folder within the `pages` directory.

For example, with the `/blog/[...slug].js` folder structure, the `slug` parameter will contain an array of path segments. For instance, for the URL `/blog/2023/02/15/sample-blog`, the slug parameter will be `['2023', '02', '15', 'sample-blog']`.

_Note:_ If the `blog` folder contains a file named `list.js` along with `[...slug].js`, the former will be considered a static route with the path `blog/list`.

Instead of using a file named `[...slug].js`, you can create a folder named `[...slug]` and place an `index.js` file inside it. If there is another file called `list.js` inside the `[...slug]` folder, `blog/list` will be treated as a catch-all route with the path `blog/[...slug]` and the server will throw an error with the message `Error: Catch-all must be the last part of the URL.`

<br/>

## Navigation of Static and Dynamic Routes:

### Navigating Using Link:

Using the Link component from the next/link module, we can navigate to multiple routes by providing the href argument.

For example, for blog posts with the URL path `/client/[clientId]/[projectId]`, we can implement the following code:

```js
import Link from "next/link";

const ClientProjectLink = ({ clientId, projectId }) => {
  return (
    <Link href={`/client/${clientId}/${projectId}`}>
      Read about project from the client
    </Link>
  );
};

export default ClientProjectLink;
```

<br/>

**`as` param in Link Component:**<br/>
The Link component can also be used with the `as` prop, as shown below:

```js
<Link
  href="/client/[clientId]/[projectId]"
  as={`/client/${clientId}/${projectId}`}
>
  Read about project from the client
</Link>
```

The `as` prop enables us to pass the URL pathname to be used in the browser's address bar, while the actual URL with parameters is provided as the href prop. This allows us to use a human-readable URL for our dynamic routes.

<br/>

**Alternative Approach using `pathname` and `query`:**<br/>
The pathname and query can be passed to href as an object instead of a concatenated URL, as follows:

```js
<Link
  href={{
    pathname: "/client/[clientId]/[projectId]",
    query: { clientId, projectId },
  }}
>
  Read about the project from the client
</Link>
```

<br/>

### Navigating Using Router:

To pass the dynamic URL, we can use the `push` method from the `useRouter` hook as follows:

```js
import { useRouter } from "next/router";

const router = useRouter();
router.push(`/client/${clientId}/${projectId}`);
```

<br/>

**Alternative Approach using `pathname` and `query`:**<br/>
The `pathname` and `query` can be passed to the `push` method of the `useRouter` hook as an object instead of a concatenated URL, as shown below:

```js
router.push({
  pathname: "/client/[clientId]/[projectId]",
  query: { clientId, projectId },
});
```

## 404 page:

Next.js provides a default `404` page, but we can customize it by creating a file named `404.js` in the `pages` directory. When Next.js cannot find a matching route, it will automatically render this page.
