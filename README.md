# eslint easy configuration rules

The purpose of this project is to easy configure and start with your project,
without worrying about the eslint configuration.

Rules are based on *airbnb* and extended for React

**No prior eslint package is required.** Feel free to contribute or fork.


## How to use

yarn add -D eslint-config-easy-configuration eslint-plugin-json-light

In your .eslintrc file
```
{
  "extends": ["easy-configuration"],
  "env": {
    "browser": true
  },
  "rules": {
    "jsx-a11y/label-has-for": 0
  },
  "plugins": [
    "json-light"
  ]
}
```
