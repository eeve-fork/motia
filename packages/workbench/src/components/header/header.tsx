import React from 'react'
import { BadgeCount } from '../ui/BadgeCount'
import { LogoIcon } from '../ui/logo-icon'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { ThemeToggle } from '../ui/theme-toggle'
import { useListFlows } from '@/hooks/use-list-flows'
import { NavigationMenuSub } from '@radix-ui/react-navigation-menu'
import { Workflow } from 'lucide-react'

export const Header: React.FC = () => {
  // const { pathname } = useLocation()
  const pathname = ''
  const { flows } = useListFlows()
  const isActive = (flowId: string) => pathname.includes(`/flow/${flowId}`)

  return (
    <header className="min-h-16 px-4 gap-1 flex items-center bg-default text-default-foreground border-b">
      <LogoIcon className="h-8 w-8 mr-16" />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a data-testid="header-logs-link" href="/logs" className={'flex flex-row items-center pr-2 relative'}>
                Logs
                <BadgeCount className="absolute top-1 right-0" dotOnly={true} />
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a data-testid="header-traces-link" href="/traces">
                Traces
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a data-testid="header-states-link" href="/states">
                States
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a data-testid="header-endpoints-link" href="/endpoints">
                Endpoints
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={'cursor-pointer'} data-testid="header-flows-link">
              Flows
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuSub>
                <NavigationMenuList className="flex flex-col min-w-[200px]">
                  {flows.map((flow) => (
                    <NavigationMenuItem key={flow.id} className="w-full" asChild>
                      <NavigationMenuLink asChild active={isActive(flow.id)}>
                        <a
                          data-testid={`flow-${flow.name}-link`}
                          href={`/flow/${flow.id}`}
                          className={'flex flex-row gap-2 items-center'}
                        >
                          <Workflow className="w-4 h-4" /> {flow.name}
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenuSub>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  )
}
