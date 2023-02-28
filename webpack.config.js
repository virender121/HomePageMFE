const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');

dotenv.config()
const deps = require("./package.json").dependencies;
module.exports = (env) => ({
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


  plugins: [ new Dotenv(),

    new ModuleFederationPlugin({
      name: "HomePageMFE",
      filename: "remoteEntry.js",
      remotes: {
        LoginPageMFE : `LoginPageMFE@${process.env.LoginPageMFE}remoteEntry.js`,
        CheckoutPageMFE : `CheckoutPageMFE@${process.env.CheckoutPageMFE}remoteEntry.js`,
        ProductPageMFE : `ProductPageMFE@${process.env.ProductPageMFE}remoteEntry.js`,
      },
      exposes: {
        './ProductCard': './src/components/views/ProductCard/ProductCard.jsx',
        './Hero': './src/components/views/Hero/Hero.jsx',
        './Footer':'./src/components/views/Footer/Footer.jsx',
<<<<<<< HEAD
        './HomePage':'./src/components/views/HomePage/HomePage.jsx',
        // './Navbar': './src/components/views/Navbar/Navbar.jsx'
=======
        './Navbar':'./src/components/views/Navbar/Navbar.jsx',
        './Header':'./src/components/views/Header/Header.jsx',
        './Homepage':'./src/components/views/HomePage/HomePage.jsx'
>>>>>>> f4e96832322a7f723c9a0a06520aba1b1c2a07c4
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
});
