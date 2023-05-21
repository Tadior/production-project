import { BuildOptions } from "../types/config";
import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";

interface BuldBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuldBabelLoaderProps) {
  const isProd = !isDev;
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        cacheDirectory: true,
        plugins: [
          [
            "@babel/plugin-transform-typescript",
            { isTsx }
          ],
          "@babel/plugin-transform-runtime",
          isTsx && isProd && [
            babelRemovePropsPlugin,
            { props: ["data-testid"] }
          ],
          isDev && require.resolve("react-refresh/babel")
        ].filter(Boolean)
      }
    }
  };
}
