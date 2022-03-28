# Molecules
Put combined atoms as molecule components here.

## Usage
#### Define
```ts{2,5}
// molecules/index.ts
import VComponent from './VComponent/vcomponent.vue'

export {
  VComponent,
}
```

#### Import
```vue{2}
<script lang="ts">
  import { VComponent } from 'molecules'
</script>
```
