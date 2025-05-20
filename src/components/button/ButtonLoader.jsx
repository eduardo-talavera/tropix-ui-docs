import { Button } from 'tropix-ui'

export const ButtonLoader = () => {
  return (
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '3rem'
    }}>
      <Button
        loader
      >
        Some Text
      </Button>
    </div>
  )
}


