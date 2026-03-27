export const useModalStore = defineStore('modalStore', () => {
    const isModalOpen = ref(false);

    function openModal() {
        isModalOpen.value = true;
    }

    function closeModal() {
        isModalOpen.value = false;
    }

    return { isModalOpen, openModal, closeModal };
});
