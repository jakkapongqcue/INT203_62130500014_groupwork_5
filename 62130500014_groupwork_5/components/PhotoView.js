app.component('photo-view', {
    props: {
        bigimg: String,
        propview: Boolean
    },
    template:
    /*html*/
        `
    <div v-show="propview" class="fixed flex justify-center h-screen w-screen top-0 bg-black bg-opacity-90 ">
        <button class="m-10 focus:outline-none" @click="backward">
            <i class="fas fa-2x fa-chevron-left text-white"></i>
        </button>
        <div class="h-screen m-8 relative">
            <i class="far fa-2x fa-times-circle text-white cursor-pointer absolute inset-y-0 right-0 -m-4 " @click="close"></i>
            <img :src="bigimg" class="m-6 border border-4 border-white lg:h-5/6">
        </div>
        <button class="m-10 focus:outline-none" @click="forward">
            <i class="fas fa-2x fa-chevron-right text-white"></i>
        </button>
    </div>
    `,
    data() {
        return {}
    },
    methods: {
        close() {
            this.$emit("when-close")
        },
        backward() {
            this.$emit("when-backward")
        },
        forward() {
            this.$emit("when-forward")
        }

    }
})