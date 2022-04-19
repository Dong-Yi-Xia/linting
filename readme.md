
# Setup

## VScode extensions
- eslint
- prettier

## Initialization
```
npm init -y
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

- airbnb
https://www.npmjs.com/package/eslint-config-airbnb
```
npx install-peerdeps --dev eslint-config-airbnb
```

- Prettier
https://prettier.io/docs/en/configuration.html
create a prettier config file `.prettierrc`


## Eslint
- https://eslint.org/docs/rules/
Create an `.eslintrc` file
```
npm i eslint
eslint --init
```

Using` prettier` vs `plugin:prettier/recommended`
```
{
  "extends": ["prettier"]
   or
  "extends": ["plugin:prettier/recommended"]
}
```
`plugin:prettier/recommended` expands to
```
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```
