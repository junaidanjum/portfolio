import { FileCode, FileHeart, ListOrdered } from 'lucide-react'
import { AnimatedBackground } from '@/components/ui/animated-background'

export const SegmentedFilter = ({
  setFilter,
}: {
  filter: string
  setFilter: (filter: string) => void
}) => {
  const TABS = [
    {
      label: 'all',
      icon: <ListOrdered className="h-4 w-4" />,
    },
    {
      label: 'work',
      icon: <FileCode className="h-4 w-4" />,
    },
    {
      label: 'personal',
      icon: <FileHeart className="h-4 w-4" />,
    },
  ]

  return (
    <div>
      <div className="flex w-fit rounded-xl">
        <AnimatedBackground
          onValueChange={(e) => setFilter(e || 'all')}
          defaultValue={TABS[0].label}
          className="rounded-lg bg-zinc-100"
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.label}
              data-id={tab.label}
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950"
            >
              {tab.icon}
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  )
}
