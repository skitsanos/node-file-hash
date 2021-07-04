# node-file-hash
Calculating file hash in node.js

### How to use

```js
(async () =>
{
    const hash = await fileHash('wildfly-22.0.0.Final.zip');
    console.log(hash);
})();
```