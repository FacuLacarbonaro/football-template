import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/store/category')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/store/category"!</div>
}
