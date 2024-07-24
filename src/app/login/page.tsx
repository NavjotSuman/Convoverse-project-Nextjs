import { redirect } from "next/navigation";

export default function LoginNow() {
  redirect(
    "https://primary-buck-62.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3001%2F"
  );
}
