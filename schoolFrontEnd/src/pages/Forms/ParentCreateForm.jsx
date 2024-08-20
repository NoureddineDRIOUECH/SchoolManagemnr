import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
import React from "react";
import ParentApi from "../../services/api/ParentApi";
import { useToast } from "@/components/ui/use-toast"
const formSchema = z.object({
    email: z.string().email().min(2).max(30),
    firstname: z.string().min(1,'Firstname Required'),
    lastname: z.string().min(1,'Lastname Required'),
    date_of_birth: z.string(),
    gender: z.string().min(1,'Gender Required'),
    blood_type: z.string().min(1,'Blood Type Required'),
    address: z.string().min(1,'Address Required'),
  password: z.string().min(8).max(30),
  phone: z.string()
  });
  
export default function ParentCreateForm() {
  const { toast } = useToast()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          firstname: '',
          lastname: '',
          gender: '',
          date_of_birth: '',
          phone: '',
          address: '',
          blood_type: '',
          password: '',
        },
      });
      const onSubmit = async (values) => {
        await ParentApi.createParent(values).then(({data,status})=>{
          if(status === 500){
            console.log(data);
            console.log('done');
            form.reset()
            toast({
              title: "Succsess",
              description: "Parent Created Successfuly",
            })
          }
        }).catch(({response}) => {
          Object.entries(response.data.errors).forEach(error => {
            const [fieldName, errorMassages] = error
            form.setError(fieldName, {
              message: errorMassages.join(),
              });
          })
        })
      };
      return (
          <>
            <div className="grid gap-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Firstname</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Firstname"
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
                      name="lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lastname</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Lastname"
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
                      name="date_of_birth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of birth</FormLabel>
                          <FormControl>
                            <Input
                            type='date'
                              placeholder="Date of birth"
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
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email"
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
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Phone"
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
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="m" />
                    </FormControl>
                    <FormLabel className="font-normal">
                     Male
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="f" />
                    </FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                  </div>
                  <div className="grid gap-2">
            
                     <FormField
          control={form.control}
          name="blood_type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Blood Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="A+" />
                    </FormControl>
                    <FormLabel className="font-normal">
                     A+
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="A-" />
                    </FormControl>
                    <FormLabel className="font-normal">A-</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="AB+" />
                    </FormControl>
                    <FormLabel className="font-normal">AB+</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="AB-" />
                    </FormControl>
                    <FormLabel className="font-normal">AB-</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="B+" />
                    </FormControl>
                    <FormLabel className="font-normal">B+</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="B-" />
                    </FormControl>
                    <FormLabel className="font-normal">B-</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="O+" />
                    </FormControl>
                    <FormLabel className="font-normal">O+</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="O-" />
                    </FormControl>
                    <FormLabel className="font-normal">O-</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                    
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="card bg-base-100 w-96 shadow-xl">
 
  

  
</div>
<div className="mockup-phone">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">
    <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="stats bg-primary text-primary-content">
  <div className="stat">
    <div className="stat-title">Account balance</div>
    <div className="stat-value">$89,400</div>
    <div className="stat-actions">
      <button className="btn btn-sm btn-success">Add funds</button>
    </div>
  </div>
    <div className="stat">
    <div className="stat-title">Current balance</div>
    <div className="stat-value">$89,400</div>
    <div className="stat-actions">
      <button className="btn btn-sm">Withdrawal</button>
      <button className="btn btn-sm">Deposit</button>
    </div>
  </div>
    </div>
  </div>
</div>
                  <Button disabled={form.formState.isSubmitting} className="w-full" type="submit">Create</Button>
                </form>
              </Form>
            </div>
          </>
      );
    }
    