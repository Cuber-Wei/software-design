/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserVO } from "./UserVO";

export type PostVO = {
  content?: string;
  createTime?: string;
  favourNum?: number;
  hasFavour?: boolean;
  hasThumb?: boolean;
  id?: number;
  tags?: Array<string>;
  thumbNum?: number;
  title?: string;
  updateTime?: string;
  user?: UserVO;
  userId?: number;
};