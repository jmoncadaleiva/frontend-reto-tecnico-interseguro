import { inject } from "vue";
import LoadingModal from '@/components/common/LoadingModal.vue'

export const useGlobalAlert = () => {
    return inject<Function>('confirm', confirm)
}

export const useGlobalLoading = () => {
    return inject<typeof LoadingModal>('loading')
}