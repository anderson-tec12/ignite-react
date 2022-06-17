const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const reactRefleshWebPackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const modeExec = isDevelopment ? "development" : "production";

const modeSourceMap = isDevelopment ? "eval-source-map" : "source-map"; // ou source-map

const pluginsList = [];

const plug = [];

// so em ambiente dev
if (isDevelopment) {
  pluginsList.push(new reactRefleshWebPackPlugin());
  plug.push(require.resolve("react-refresh/babel"));
}

pluginsList.push(
  new htmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html"),
  })
);

module.exports = {
  mode: modeExec, // development || production
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: pluginsList,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: plug,
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    // contentBase: path.resolve(__dirname, "public"),
    hot: true,
    port: 9000,
    compress: false,
    static: {
      directory: path.join(__dirname, "public"),
    },
    client: {
      overlay: false,
    },
    //server: "https",
    //host: "0.0.0.0",
  },
  performance: {
    hints: false,
  },
  devtool: modeSourceMap,
};
