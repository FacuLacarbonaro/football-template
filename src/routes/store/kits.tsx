import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/store/kits')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/store/kits"!</div>
}
