module.exports = {
  // verbose: true,
  // "Ассеты не нужны для тестирования, поэтому их мы подменяем js-заглушками при тестах"
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  }
}