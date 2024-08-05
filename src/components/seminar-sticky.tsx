import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SeminarSticky() {
  return (
    <div className="bg-white rounded-lg fixed bottom-4 right-4 flex flex-col text-primary p-4 text-center space-y-2 z-50">
      <h3>
        Know more about the Course <br /> with our free Webinar
      </h3>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="self-center px-8">Book now</Button>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-4xl text-primary font-normal">
              Register your free webinar
            </DialogTitle>
            <DialogDescription>
              Sign up to start your Journey.
            </DialogDescription>
            <div className="flex flex-col gap-4 pt-8">
              <Input
                className="text-base text-primary py-6 px-4"
                placeholder="Enter your name"
              />
              <Input
                className="text-base text-primary  py-6 px-4"
                placeholder="Enter your email"
              />
              <Input
                className="text-base text-primary  py-6 px-4 "
                placeholder="Enter your Phone number"
              />
            </div>
          </DialogHeader>
          <DialogFooter>
            <Button className="self-center px-8">Book now!</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
