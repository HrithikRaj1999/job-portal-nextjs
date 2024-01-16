"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader2, Loader2Icon } from "lucide-react";

const FormSubmitButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} type="submit" disabled={props.disabled || pending}>
      <span className="flex items-center justify-center gap-1">{pending ? <Loader2Icon size={18} className="animate-spin" /> : props.children}</span>
    </Button>
  );
};

export default FormSubmitButton;
