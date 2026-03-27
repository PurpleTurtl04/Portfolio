<template>
    <div :class="{ 'modal-open': modalStore.isModalOpen }" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the X button to close.</p>
            <div class="modal-action">
                <!-- Use a button to close the modal via Pinia action -->
                <button class="btn" @click="modalStore.closeModal()">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const modalStore = useModalStore();

    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modalStore.closeModal();
        }
    };

    onMounted(() => {
        document.addEventListener('keydown', handleEscape);
    });

    onUnmounted(() => {
        document.removeEventListener('keydown', handleEscape);
    });
</script>
