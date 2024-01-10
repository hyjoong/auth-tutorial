import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "@auth/core/jwt";
import { UserRole } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  role: "ADMIN" | "USER";
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
