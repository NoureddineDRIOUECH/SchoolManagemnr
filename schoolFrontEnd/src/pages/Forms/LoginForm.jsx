import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useStudentContext } from "../../context/StudentContext";
import { ADMIN_DASHBORD_ROUTE, STUDENT_DASHBORD_ROUTE } from "../../router";
// import Login from "./login.svg";
const formSchema = z.object({
  email: z.string().email().min(2).max(30),
  password: z.string().min(8).max(30)
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "nourddine@gmail.com",
      password: "password1234",
    },
  });
  const navigate = useNavigate()
  const {login, setAuthenticated, setToken} = useStudentContext()
  const onSubmit = async (values) => {
    try{await login(values).then(({status, data}) => {
      if (status === 200) {
          setToken(data.token)
          setAuthenticated(true)
          const {role} = data.user;
          switch (role) {
            case "student":
              navigate(STUDENT_DASHBORD_ROUTE);
              break;
            case "admin":
              navigate(ADMIN_DASHBORD_ROUTE);
              break;
            case "teacher":
              navigate("/teacher");
              break;
            default:
              break;
            }
      }
  })}catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.status === 401) {
        form.setError('email', {
          message: error.response.data.message,email
        });
      } else {
        form.setError('email', {
          message: error.response.data.message
        });
      }
    }
  };

  return (
    <Card className="mx-auto mt-10 w-2/4">
      {/* <Login/> */}
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="m@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button disabled={form.formState.isSubmitting} className="w-full" type="submit">Login</Button>
            </form>
          </Form>
          <button className="btn btn-primary">Button</button>

          <div className="flex items-center">
            <Link to="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to={'/signup'} className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
