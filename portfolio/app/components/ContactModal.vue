<template>
    <div :class="{ 'modal-open': modalStore.isModalOpen }" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Let's work together!</h3>
            <p class="pt-4 pb-2">Cell: 502-299-6425</p>
            <p class="pb-4">Email: nledwa01@gmail.com</p>
            <!-- <p class="py-4">Fill out the information below to contact me.</p> -->
            <!-- <form method="POST" action="/submit"> -->
            <!-- <form>
                <input
                    type="text"
                    placeholder="Data"
                    class="input input-bordered mt-4 w-full"
                />
                <div class="modal-action">
                    <button class="btn btn-primary" type="submit">
                        Submit
                    </button>
                    <button class="btn" @click="modalStore.closeModal()">
                        Close
                    </button>
                </div>
            </form> -->
            <button class="btn" @click="modalStore.closeModal()">Close</button>
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
