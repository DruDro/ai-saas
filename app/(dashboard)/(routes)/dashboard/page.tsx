"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music",
    href: "/music",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Image",
    href: "/image",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video",
    href: "/video",
    icon: Video,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Code",
    href: "/code",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <>
      <header className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Dashboard
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Explore the tools
        </p>
      </header>
      <main className="px-4 md-px:20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="flex items-center p-4 cursor-pointer border-black/5 justify-between hover:shadow-md transition"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon
                  className={cn("w-8 h-8", tool.color)}
                  stroke="currentColor"
                />
              </div>
              <h3 className="font-semibold">{tool.label}</h3>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </main>
    </>
  );
};

export default DashboardPage;
