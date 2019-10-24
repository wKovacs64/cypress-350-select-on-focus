# cypress-350-select-on-focus

This is a reproduction of an issue introduced in Cypress 3.5.0 where the
`onFocus` handler on an `input` (implemented as `e => e.target.select()`) no
longer selects the value. The test passes in Cypress 3.4.1.

### Install dependencies

```
yarn
```

### Run the test

Interactive mode:

```
yarn test
```

Headless mode:

```
yarn test:ci
```
