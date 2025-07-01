import React from 'react'
import { ReactFlowProvider } from '@xyflow/react'
import { Header } from './components/header/header'
import { CollapsiblePanel, CollapsiblePanelGroup, TabsContent, TabsList, TabsTrigger } from '@motiadev/ui'
import { Link2, Workflow } from 'lucide-react'

export const App: React.FC = () => {
  return (
    <div className="flex flex-col bg-background text-foreground h-screen overflow-hidden">
      <ReactFlowProvider>
        <Header />
        <main className="m-2 flex flex-col h-full min-h-0" role="main">
          <CollapsiblePanelGroup direction="vertical" className="gap-1 h-full" aria-label="Workbench panels">
            <CollapsiblePanel
              id="top-panel"
              variant={'tabs'}
              defaultTab={'flow'}
              header={
                <TabsList>
                  <TabsTrigger value="flow">
                    <Workflow /> Flow
                  </TabsTrigger>
                  <TabsTrigger value="endpoint">
                    <Link2 />
                    Endpoint
                  </TabsTrigger>
                </TabsList>
              }
            >
              <TabsContent value="flow" className={'m-5'}>
                <h3 className="font-bold text-lg mb-4">Flow</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
              </TabsContent>
              <TabsContent value="endpoint" className={'m-5'}>
                <h3 className="font-bold text-lg mb-4">Endpoint</h3>
                <p>
                  Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc.
                  Nunc consectetur, justo sed laoreet ullamcorper, ipsum enim fringilla lectus, eu egestas lectus ex et
                  nibh.
                </p>
              </TabsContent>
            </CollapsiblePanel>

            <CollapsiblePanel
              id="bottom-panel"
              variant={'tabs'}
              defaultTab={'tracing'}
              header={
                <TabsList>
                  <TabsTrigger value="tracing">
                    <Workflow /> Tracing
                  </TabsTrigger>
                  <TabsTrigger value="logs">
                    <Link2 />
                    Logs
                  </TabsTrigger>
                  <TabsTrigger value="states">
                    <Link2 />
                    States
                  </TabsTrigger>
                </TabsList>
              }
            >
              <TabsContent value="tracing" className={'m-5'}>
                <h3 className="font-bold text-lg mb-4">Tracing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
              </TabsContent>
              <TabsContent value="logs" className={'m-5'}>
                <h3 className="font-bold text-lg mb-4">Logs</h3>
                <p>
                  Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc.
                  Nunc consectetur, justo sed laoreet ullamcorper, ipsum enim fringilla lectus, eu egestas lectus ex et
                  nibh.
                </p>
              </TabsContent>
              <TabsContent value="states" className={'m-5'}>
                <h3 className="font-bold text-lg mb-4">States</h3>
                <p>
                  Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc.
                  Nunc consectetur, justo sed laoreet ullamcorper, ipsum enim fringilla lectus, eu egestas lectus ex et
                  nibh.
                </p>
              </TabsContent>
            </CollapsiblePanel>
          </CollapsiblePanelGroup>
        </main>
      </ReactFlowProvider>
    </div>
  )
}
