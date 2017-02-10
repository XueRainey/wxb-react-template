module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        // "react/prop-types": 0,
        // "no-param-reassign": 0,
        // "no-underscore-dangle": 0,
        // "func-names": 0,
        // "prefer-arrow-callback": 0,
        "comma-dangle": ["error", "only-multiline"],
        // "import/no-unresolved": [1],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
    }
};
