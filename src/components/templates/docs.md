# Templates
Put combined organisms as template components here.

## Usage
#### Define
```ts{2,5}
// templates/index.ts
import VComponent from './VComponent/vcomponent.vue'

export {
  VComponent,
}
```

#### Import
```vue{2}
<script lang="ts">
  import { VComponent } from 'templates'
</script>
```
