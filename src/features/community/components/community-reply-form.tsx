"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function CommunityReplyForm() {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Add a reply
        </h2>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Share practical feedback, ask a clarifying question, or suggest a next
          step.
        </p>
      </div>

      <form className="space-y-4">
        <Textarea
          name="reply"
          required
          rows={5}
          placeholder="Write a helpful reply..."
          className="resize-none rounded-xl"
        />

        <div className="flex justify-end">
          <Button type="submit" className="rounded-xl">
            Post reply
          </Button>
        </div>
      </form>
    </section>
  );
}
