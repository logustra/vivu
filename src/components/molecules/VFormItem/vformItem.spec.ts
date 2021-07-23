import { render } from '@testing-library/vue'
import VFormItem from './vformItem.vue'

test('VFormItem rendered properly', async () => {
  const { container } = render(
    VFormItem,
    {
      props: {
        error: true
      }
    }
  )

  expect(container.firstChild).toHaveClass('-error')
})
