# Installation
In your root folder, run following command
```console
npm install @ozcanarican/modal
```
add CSS link in the head tag
```html
<head>
    <link rel="stylesheet" href="/node_modules/@ozcanarican/modal/css/modal.css">
</head>
```

add JS link to footer
<body>
    .
    .
    .
    <script src="/node_modules/@ozcanarican/modal/modal.js"></script>
</body>
```

# Usage
## Adding Modal
In following example, show a standart modal with countdown featured button. This button wont be able to fire click event until user waits exact time which is declared in *data-time* field.

```html
<div class="modal" id="testmodal" type="yok">
        <div class="content">
            <div class="header">
                This is your test title
            </div>
            <div class="body">
                Your content goest here
            </div>
            <div class="buttons">
                <button class="modal-cancel">Cancel</button>
                <button class="modal-countdown" data-time="6">Delete</button>
            </div>
        </div>
    </div>
```
## Calling Modal
Your modal can be called by any DOM element like following example;

```html
<span class="modal-button" data-target="testmodal">Click Me!</span>
```

A dom element with **modal-button** class, must have **data-target** element as well. 

## Adding callback function to countdown button
The following example shows how to add custom events.
```js
const callback = () => {
    alert("Hello World!")
}
addDefaultEvents({target:"testmodal", callback: callback})
```