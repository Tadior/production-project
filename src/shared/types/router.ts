import { RouteProps } from "react-router-dom";
import { UserRole } from "@/app/entities/User";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};