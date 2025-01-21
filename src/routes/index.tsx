import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-green-500 cursor-pointer">
        Home component
      </h1>
    </div>
  );
}
