## Organisms
Put combined molecules as organism components here.

## Usage
#### Define
```ts{2,5}
// organisms/index.ts
import VComponent from './VComponent/vcomponent.vue'

export {
  VComponent,
}
```

#### Import
```vue{2}
<script lang="ts">
  import { VComponent } from 'organisms'
</script>
```
