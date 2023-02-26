const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
    open: false
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "HomePageMFE",
      filename: "remoteEntry.js",
      remotes: {
        LoginPageMFE : 'LoginPageMFE@http://localhost:3002/remoteEntry.js',
        CheckoutPageMFE : 'CheckoutPageMFE@http://localhost:3003/remoteEntry.js',
        ProductPageMFE : 'ProductPageMFE@http://localhost:3004/remoteEntry.js',
        HomePageMFE: 'HomePageMFE@http://localhost:3001/remoteEntry.js',
      },
      exposes: {
        './ProductCard': './src/components/views/ProductCard/ProductCard.jsx',
        './Hero': './src/components/views/Hero/Hero.jsx',
        './Footer':'./src/components/views/Footer/Footer.jsx',
        './HomePage':'.src/componets/views/HomePage/HomePage.jsx'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
