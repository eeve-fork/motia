import { ApiNode, ApiNodeProps } from '@motiadev/workbench'
import { Button } from '@motiadev/ui'
import React from 'react'

export const Node: React.FC<ApiNodeProps> = (data) => {
  const start = () => {
    fetch('/test-python', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'hello world' }),
    })
  }

  return (
    <ApiNode {...data}>
      <Button data-testid="start-flow-button" onClick={start}>
        Start Flow
      </Button>
    </ApiNode>
  )
}
