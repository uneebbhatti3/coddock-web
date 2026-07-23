import RoadmapCardSkeleton from "@/features/roadmaps/components/skeleton/roadmap-card-skeleton";

const roadmapSkeletons = Array.from({ length: 4 });

export default function RoadmapsListSkeleton() {
  return (
    <div className="grid gap-4">
      {roadmapSkeletons.map((_, index) => (
        <RoadmapCardSkeleton key={index} />
      ))}
    </div>
  );
}
