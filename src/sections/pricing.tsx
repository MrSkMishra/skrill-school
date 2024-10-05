'use client'
import React, { useState } from "react";
import Heading from "@/components/custom/heading";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useModal } from "@/context/modal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const freeCourseCharacteristics = [
  "3-6 months Duration",
  "Typically larger batches, often resulting in less personal assistance",
  "Job support is often limited to the end of the course",
];

const SkrillCourseCharacteristics = [
  "6 month Duration",
  "Each batch consists of only 25 students, ensuring personalized assistance",
  "Live Doubt Sessions with Mentors",
  "Provides continuous job support from the beginning of the course until successful placement",
];

export default function Pricing() {
  const { setIsModalOpen, setModalHeading } = useModal();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentType, setPaymentType] = useState("");

  function onClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const buttonType = event.currentTarget.getAttribute('data-btn');

    switch (buttonType) {
      case 'half-payment':
      case 'full-payment':
        setPaymentType(buttonType === 'half-payment' ? 'half' : 'full');
        setIsPaymentModalOpen(true);
        break;
      case 'enroll':
      default:
        setModalHeading("Enroll now to skrill school");
        setIsModalOpen(true);
        break;
    }
  }

  function handlePaymentProceed() {
    setIsPaymentModalOpen(false);
    if (paymentType === 'half') {
      window.location.href = 'https://rzp.io/l/n5ttAIJH4';
    } else {
      window.location.href = 'https://rzp.io/l/XKNwAO2EE';
    }
  }

  return (
    <Section id="pricing" containerClassName="flex flex-col items-center">
      <Heading className="max-w-3xl">These specification at just</Heading>
      <SectionContentWrapper className="w-full max-w-6xl">
        <div className="flex justify-center gap-24 lg:flex-col lg:items-center">
          <div className="bg-white text-primary rounded-lg flex flex-col items-center p-8 pb-0 space-y-6 max-w-sm min-h-[600px]">
            <h1 className="text-4xl font-bold">Others</h1>
            <p className="text-5xl py-16 font-bold">₹3,00,000</p>
            <ul className="flex flex-col space-y-3 list-disc px-4">
              {freeCourseCharacteristics.map((item, idx) => (
                <li key={idx} className="font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary rounded-lg flex flex-col items-center p-8 pb-0 space-y-6 max-w-sm min-h-[600px] shadow-2xl shadow-secondary">
            <h1 className="text-4xl font-bold">Skrill School</h1>
            <div className="flex flex-col space-y-4 py-6">
              <p className="relative text-5xl font-bold opacity-65 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-full before:h-[0.2rem] before:bg-white">
                ₹45,000
              </p>
              <p className="text-5xl font-bold text-primary">₹30,000</p>
            </div>
            <ul className="flex flex-col space-y-3 list-disc px-4">
              {SkrillCourseCharacteristics.map((item, idx) => (
                <li key={idx} className="font-medium">
                  {item}
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              size="lg"
              className=""
              data-btn="enroll"
              onClick={onClickHandler}
            >
              Enroll now
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-16 gap-24">
          <Card className="w-64">
            <CardHeader>
              <CardTitle className="flex items-center justify-between w-full">
                <span>Half Payment</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p> Note: After completion of payment, please close <br />the payment page as your payment will be captured. <br />If payment is already done, don&apos;t click on the link.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>For those who want half payment</p>
            </CardContent>
            <CardFooter>
              <Button data-btn="half-payment" onClick={onClickHandler}>
                Proceed with half payment
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-64">
            <CardHeader>
              <CardTitle className="flex items-center justify-between w-full">
                <span>Full Payment</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p> Note: After completion of payment, please close <br />the payment page as your payment will be captured. <br />If payment is already done, don&apos;t click on the link. </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>For those who want full payment</p>
            </CardContent>
            <CardFooter>
              <Button data-btn="full-payment" onClick={onClickHandler}>
                Proceed with full payment
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Button className="px-10 py-8" onClick={onClickHandler}>
            Request a call back
          </Button>
        </div>
      </SectionContentWrapper>

      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Confirmation</DialogTitle>
          </DialogHeader>
          <p> Note: After completion of payment, please close the payment page as your payment will be captured. If payment is already done, don&apos;t click on the link.
          </p>
          <DialogFooter>
            <Button onClick={handlePaymentProceed}>Proceed</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Section>
  );
}