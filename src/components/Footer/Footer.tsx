import { LucideSeparatorVertical } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Swapna Karya</h3>
            <span className="flex gap-x-3 text-sm text-muted-foreground">
              {" "}
              <p className="">Choose your own dream Job</p>
              <LucideSeparatorVertical size={16} />
              <p className=""> Connect Apply Join Reapeat</p>
            </span>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Swapna Karya, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
