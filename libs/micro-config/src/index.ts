import HtmlWebpackPlugin from "html-webpack-plugin";
import { DefinePlugin, EnvironmentPlugin, container } from "webpack";

const { MFLiveReloadPlugin } = require("@module-federation/fmr");

interface WithFederationProps {
  name: string;
  remotes: Record<string, string>;
  dependencies: Record<string, string>;
  port: number;
  open: boolean;
  liveReload: boolean;
  isShell: boolean;
}

const { ModuleFederationPlugin } = container;
const URL_PATH = "microapp";

function getRemotes(remotes: Record<string, string>): Record<string, string> {
  return Object.entries(remotes).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`${key}`]: `${key}@${value}/${URL_PATH}.js`,
    };
  }, {});
}

export function WithFederation({
  name = "",
  remotes = {},
  dependencies = {},
  port = 3000,
  open = false,
  liveReload = false,
  isShell = false,
}: WithFederationProps) {
  const plugins: any[] = [
    new EnvironmentPlugin({ BUILD_DATE: new Date().toDateString() }),
    new DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ];

  if (liveReload && process.env.NODE_ENV === "development")
    plugins.push(
      new MFLiveReloadPlugin({
        port,
        container: name,
        standalone: false,
      })
    );

  plugins.push(
    new ModuleFederationPlugin({
      name,
      filename: !isShell ? `${URL_PATH}.js` : undefined,
      exposes: !isShell
        ? {
            "./index": "./src/main.ts",
          }
        : undefined,
      remotes: getRemotes(remotes),
      shared: {
        ...dependencies,
        react: { singleton: true, requiredVersion: dependencies.react },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    })
  );

  return {
    entry: "./src/index.ts",
    mode: "development",
    devServer: {
      port,
      open,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins,
  };
}
