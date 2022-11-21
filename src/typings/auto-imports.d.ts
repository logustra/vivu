export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const SET_TITLE: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonTypes')['SET_TITLE']
  const common: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/index')['default']
  const commonActions: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonActions')['default']
  const commonGetters: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonGetters')['default']
  const commonMutations: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonMutations')['default']
  const commonState: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonState')['default']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const createLogger: typeof import('vuex')['createLogger']
  const createNamespacedHelpers: typeof import('vuex')['createNamespacedHelpers']
  const createStore: typeof import('vuex')['createStore']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const delErrorPage: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/storage')['delErrorPage']
  const effectScope: typeof import('vue')['effectScope']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const getErrorPage: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/storage')['getErrorPage']
  const h: typeof import('vue')['h']
  const http: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/services/Http')['default']
  const httpService: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/services/index')['httpService']
  const inject: typeof import('vue')['inject']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const isUndefined: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/filters')['isUndefined']
  const mapActions: typeof import('vuex')['mapActions']
  const mapGetters: typeof import('vuex')['mapGetters']
  const mapMutations: typeof import('vuex')['mapMutations']
  const mapState: typeof import('vuex')['mapState']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const routerGuard: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/routerGuard')['default']
  const setErrorPage: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/storage')['setErrorPage']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const stores: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/index')['default']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCommon: typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/composables/useCommon')['default']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useI18n: typeof import('vue-i18n')['useI18n']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const useStore: typeof import('vuex')['useStore']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly SET_TITLE: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonTypes')['SET_TITLE']>
    readonly common: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/index')['default']>
    readonly commonActions: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonActions')['default']>
    readonly commonGetters: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonGetters')['default']>
    readonly commonMutations: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonMutations')['default']>
    readonly commonState: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/Common/commonState')['default']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly createLogger: UnwrapRef<typeof import('vuex')['createLogger']>
    readonly createNamespacedHelpers: UnwrapRef<typeof import('vuex')['createNamespacedHelpers']>
    readonly createStore: UnwrapRef<typeof import('vuex')['createStore']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly delErrorPage: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/storage')['delErrorPage']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly getErrorPage: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/storage')['getErrorPage']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly http: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/services/Http')['default']>
    readonly httpService: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/services/index')['httpService']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly isUndefined: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/filters')['isUndefined']>
    readonly mapActions: UnwrapRef<typeof import('vuex')['mapActions']>
    readonly mapGetters: UnwrapRef<typeof import('vuex')['mapGetters']>
    readonly mapMutations: UnwrapRef<typeof import('vuex')['mapMutations']>
    readonly mapState: UnwrapRef<typeof import('vuex')['mapState']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly routerGuard: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/routerGuard')['default']>
    readonly setErrorPage: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/utils/storage')['setErrorPage']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly stores: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/stores/index')['default']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useCommon: UnwrapRef<typeof import('/Volumes/DIST/Documents/Open Source/vivu/src/composables/useCommon')['default']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useI18n: UnwrapRef<typeof import('vue-i18n')['useI18n']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useStore: UnwrapRef<typeof import('vuex')['useStore']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
  }
}
