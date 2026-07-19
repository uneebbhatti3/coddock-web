"use client";

import { useState } from "react";
import { ImageIcon, LinkIcon, PenLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AskQuestionDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        className="h-11 w-full rounded-xl lg:w-auto"
        onClick={() => setOpen(true)}
      >
        <PenLine className="size-4" />
        Ask question
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Ask a question</DialogTitle>
            <DialogDescription>
              Share a clear question, project blocker, or feedback request so
              other developers can help you properly.
            </DialogDescription>
          </DialogHeader>

          <form className="mt-2 space-y-5">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>

              <Input
                id="title"
                name="title"
                required
                placeholder="Example: How should I structure my first Next.js project?"
                className="h-11 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>

              <Select name="category" required>
                <SelectTrigger id="category" className="h-11 w-full rounded-xl">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="question">Question</SelectItem>
                  <SelectItem value="project-help">Project Help</SelectItem>
                  <SelectItem value="roadmap">Roadmap</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="showcase">Showcase</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="text-sm font-medium">
                Details
              </label>

              <Textarea
                id="details"
                name="details"
                required
                rows={7}
                placeholder="Explain what you are trying to do, where you are stuck, what you have already tried, and what kind of help you need."
                className="resize-none rounded-xl"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="githubLink" className="text-sm font-medium">
                  GitHub link{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>

                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="githubLink"
                    name="githubLink"
                    type="url"
                    placeholder="https://github.com/..."
                    className="h-11 rounded-xl pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="liveLink" className="text-sm font-medium">
                  Live link{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>

                <div className="relative">
                  <ImageIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="liveLink"
                    name="liveLink"
                    type="url"
                    placeholder="https://your-project.vercel.app"
                    className="h-11 rounded-xl pl-9"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-4">
              <p className="text-sm font-medium text-foreground">Posting tip</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Good questions include context, what you tried, the error or
                blocker, and the exact feedback you need.
              </p>
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                className="rounded-xl"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <Button type="submit" className="rounded-xl">
                Post question
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
