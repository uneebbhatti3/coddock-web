import RoadmapCard from "@/features/roadmaps/components/roadmap-card";
import RoadmapsEmptyState from "@/features/roadmaps/components/roadmaps-empty-state";
import { getPublishedRoadmaps } from "@/features/roadmaps/data/roadmaps-data";
import type { RoadmapsListProps } from "@/features/roadmaps/types/roadmaps-types";

export default function RoadmapsList({
  query = "",
  path = "all",
}: RoadmapsListProps) {
  const normalizedQuery = query.trim().toLowerCase();

  const filteredRoadmaps = getPublishedRoadmaps().filter((roadmap) => {
    const matchesPath = path === "all" || roadmap.path === path;

    const searchableText = [
      roadmap.title,
      roadmap.description,
      roadmap.level,
      roadmap.estimatedDuration,
      roadmap.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = normalizedQuery
      ? searchableText.includes(normalizedQuery)
      : true;

    return matchesPath && matchesQuery;
  });

  if (filteredRoadmaps.length === 0) {
    return <RoadmapsEmptyState />;
  }

  return (
    <div className="grid gap-4">
      {filteredRoadmaps.map((roadmap) => (
        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
      ))}
    </div>
  );
}
