import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border-current text-foreground",
        reactjs:
          "border-transparent bg-orange-500 text-white hover:bg-orange-600",
        abc: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
        ruby: "border-transparent bg-red-500 text-white hover:bg-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, children, ...props }) {
  // Determine the variant based on the children (text content)
  let variant = "default"; // Default variant
  const content = React.Children.toArray(children).join("");
  if (content.toLowerCase() === "youtube") {
    variant = "youtube";
  } else if (content.toLowerCase() === "note") {
    variant = "note";
  } else if (content.toLowerCase() === "cheatsheet") {
    variant = "cheatsheet";
  } else if (content.toLowerCase() === "ruby") {
    variant = "ruby";
  } else if (content.toLowerCase() === "react js") {
    variant = "reactjs";
  } else if (content.toLowerCase() === "python") {
    variant = "python";
  } else if (content.toLowerCase() === "react native") {
    variant = "react native";
  } else if (content.toLowerCase() === "ruby") {
    variant = "ruby";
  } else if (content.toLowerCase() === "ruby") {
    variant = "ruby";
  } else if (content.toLowerCase() === "ruby") {
    variant = "ruby";
  }

  return (
    <div className={badgeVariants({ variant }) + " " + className} {...props}>
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
