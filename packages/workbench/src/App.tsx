import React, { useCallback, useRef } from 'react'
import { ReactFlowProvider } from '@xyflow/react'
import { Header } from './components/header/header'
import { Container, ContainerContent, ContainerHeader } from '@motiadev/ui'
import { RefreshCw } from 'lucide-react'
import { ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { Button } from '@/components/ui/button'

export const App: React.FC = () => {
  const topPanelRef = useRef<ImperativePanelHandle>(null)
  const bottomPanelRef = useRef<ImperativePanelHandle>(null)

  const collapsePanel = useCallback(
    (to: 'top' | 'bottom') => {
      const panel = to === 'top' ? topPanelRef.current : bottomPanelRef.current
      if (!panel) return

      console.log(panel.getSize())
      // if (panel.isCollapsed()) {
      panel.resize(panel.getSize() > 4 ? 4 : 50)
      // } else {
      //   panel.collapse()
      // }
    },
    [topPanelRef, bottomPanelRef],
  )

  return (
    <div className="flex flex-col bg-background text-foreground h-screen">
      <ReactFlowProvider>
        <Header />
        <div className={'m-2 flex flex-col h-full'}>
          <PanelGroup direction="vertical" className={'gap-1'}>
            <Panel collapsible ref={topPanelRef}>
              <Container className={'min-h-[40px]'}>
                <ContainerHeader className={'gap-2'}>
                  <h4>Container Header 1</h4>
                  <div className="flex-1"></div>
                  <Button variant="outline" onClick={() => collapsePanel('top')}>
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </ContainerHeader>
                <ContainerContent>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam in dui mauris Vivamus hendrerit arcu sed
                  erat molestie posuere sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Donec convallis
                  lectus a urna semper rhoncus Nullam quis neque libero Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos. Nullam quis neque libero Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis neque libero Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </ContainerContent>
              </Container>
            </Panel>

            <PanelResizeHandle />
            <Panel collapsible ref={bottomPanelRef}>
              <Container>
                <ContainerHeader className={'gap-2'}>
                  <h4>Container Header 2</h4>
                  <div className="flex-1"></div>
                  <Button variant="outline" onClick={() => collapsePanel('bottom')}>
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </ContainerHeader>
                <ContainerContent>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam in dui mauris Vivamus hendrerit arcu
                    sed erat molestie posuere sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Donec
                    convallis lectus a urna semper rhoncus Nullam quis neque libero Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis neque libero Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis neque
                    libero Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </p>
                </ContainerContent>
              </Container>
            </Panel>
          </PanelGroup>
        </div>
      </ReactFlowProvider>
    </div>
  )
}
