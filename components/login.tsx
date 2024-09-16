import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";
import { useLogin } from "@/hooks/useLogin";

import client from "@/constants/apollo-client";
import { AUTH_TOKEN } from "@/constants/authToken";
import authenticatedVar from "@/constants/authenticated";

export function LoginForm() {
  const [login] = useLogin();
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formVal = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    await login({
      variables: {
        email: formVal.email,
        password: formVal.password,
      },
      onCompleted: ({ login }) => {
        localStorage.setItem(AUTH_TOKEN, login.access_token);
        client.refetchQueries({ include: "active" });
        authenticatedVar(true);
        router.push("/myinfo/timeoff");
      },
    });
  };
  return (
    <div className="h-screen flex">
      <Card className="w-full  max-w-sm mx-auto self-center">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
