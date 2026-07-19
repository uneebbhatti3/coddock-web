"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CommunityLikeButtonProps } from "../types/community-types";

export default function CommunityLikeButton({
  initialLikes = 0,
}: CommunityLikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((currentLikes) => currentLikes - 1);
    } else {
      setLiked(true);
      setLikes((currentLikes) => currentLikes + 1);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleLike}
      aria-pressed={liked}
      className={cn(
        "h-9 rounded-xl gap-2",
        liked &&
          "border-primary/30 bg-primary/10 text-primary hover:bg-primary/15",
      )}
    >
      <Heart
        className={cn(
          "size-4 transition-colors",
          liked && "fill-current text-primary",
        )}
      />
      {likes}
    </Button>
  );
}
