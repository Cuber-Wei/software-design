/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from "./ApiRequestOptions";

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
  BASE: string;
  VERSION: string;
  WITH_CREDENTIALS: boolean;
  CREDENTIALS: "include" | "omit" | "same-origin";
  TOKEN?: string | Resolver<string> | undefined;
  USERNAME?: string | Resolver<string> | undefined;
  PASSWORD?: string | Resolver<string> | undefined;
  HEADERS?: Headers | Resolver<Headers> | undefined;
  ENCODE_PATH?: ((path: string) => string) | undefined;
};

export const OpenAPI: OpenAPIConfig = {
  BASE: "http://124.220.74.204", //http://124.220.74.204  http://localhost:8101 http://l0v3ch4n.top
  VERSION: "1.0",
  WITH_CREDENTIALS: true,
  CREDENTIALS: "include",
  TOKEN: undefined,
  USERNAME: "l0v3ch4n",
  PASSWORD: "Wei-040618",
  HEADERS: undefined,
  ENCODE_PATH: undefined,
};
