import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="min-h-full flex items-center justify-center">
      <Spinner className="w-12 h-12" />
    </div>
  );
}
