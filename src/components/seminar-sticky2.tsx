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
import { ModalProviderTwo, useModal2 } from "@/context/modal2";
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

    course: z.string().min(2).max(50),

});

export default function SeminarSticky2() {
    // const [date, setDate] = useState();
    const { isModalOpenTwo, setIsModalOpenTwo, modalHeadingTwo, setModalHeadingTwo } =
        useModal2();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            course: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await getSheetData(values);
        if (res.status) {
            toast.success("We will get to you soon");
        } else {
            toast.error("Something went wrong! Please try again later");
        }
        setIsModalOpenTwo(false);
    }

    function onClickHandler2() {
        setModalHeadingTwo("Register now for the webinar");
        setIsModalOpenTwo(true);
    }

    return (
        <ModalProviderTwo>

            <div className="bg-white rounded-lg fixed bottom-4 right-4  flex-col text-primary p-4 text-center space-y-2 z-50 hidden">
                <h3>Book a Free Trail <br />Session</h3>
                <Dialog

                    open={isModalOpenTwo}
                    onOpenChange={(value) => setIsModalOpenTwo(value)}

                >
                    <DialogTrigger asChild onClick={onClickHandler2}>
                        <Button className="self-center px-8">Book now</Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#464A6C] rounded-lg">
                        <DialogHeader>
                            <DialogTitle className="text-4xl text-primary font-normal text-white">
                                {modalHeadingTwo}
                            </DialogTitle>
                            <DialogDescription className="text-4xl text-primary  text-white font-thin">
                                Registration Open
                            </DialogDescription>
                        </DialogHeader>


                        <Form  {...form} >
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="text-base text-primary py-6 px-4 rounded-full"
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
                                                    className="text-base text-primary py-6 px-4 rounded-full"
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
                                            <FormLabel>whatsapp number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="text-base text-primary py-6 px-4 "
                                                    placeholder="Enter your whatsapp number"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="course"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>course</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="text-base text-primary py-6 px-4 rounded-full"
                                                    placeholder="Enter your name"
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
                                        Register
                                    </Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </div>
        </ModalProviderTwo >
    );
}
