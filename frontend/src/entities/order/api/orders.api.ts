export async function createOrder(data: { amountTokens: number; amountDollars: number }) {
  const response = await fetch('http://localhost:3004/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Failed to create order')
  }
  return await response.json()
}