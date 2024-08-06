"use client";

import { cn } from "@/lib/utils";

import { Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { getSheetData } from "../actions/google-sheets.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useModal } from "@/context/modal";
// import { Calendar } from "@/components/ui/calendar";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z
    .string()
    .min(5, { message: "Email should provided." })
    .email({ message: "Please give valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Invalid Number!" })
    .max(10, { message: "Invalid Number!" })
    .regex(phoneRegex, "Invalid Number!"),
});

export default function SeminarSticky() {
  // const [date, setDate] = useState();
  const { isModalOpen, setIsModalOpen, modalHeading, setModalHeading } =
    useModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await getSheetData(values);
    if (res.status) {
      toast.success("We will get to you soon");
    } else {
      toast.error("Something went wrong! Please try again later");
    }
    setIsModalOpen(false);
  }

  function onClickHandler() {
    setModalHeading("Register now for the webinar");
    setIsModalOpen(true);
  }

  return (
    <div className="bg-white rounded-lg fixed bottom-4 right-4 flex flex-col text-primary p-4 text-center space-y-2 z-50">
      <h3>
        Know more about the Course <br /> with our free Webinar
      </h3>
      <Dialog
        open={isModalOpen}
        onOpenChange={(value) => setIsModalOpen(value)}
      >
        <DialogTrigger asChild onClick={onClickHandler}>
          <Button className="self-center px-8">Book now</Button>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-4xl text-primary font-normal">
              {modalHeading}
            </DialogTitle>
            <DialogDescription>
              Sign up to start your Journey.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base text-primary py-6 px-4"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base text-primary py-6 px-4"
                        placeholder="Enter your emailID"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base text-primary py-6 px-4"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Calendar */}
              {/*   mode="single" */}
              {/*   selected={date} */}
              {/*   onSelect={setDate} */}
              {/*   className="rounded-md border" */}
              {/* /> */}
              <DialogFooter>
                <Button className="self-center px-8" onClick={() => onSubmit}>
                  Book now!
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
