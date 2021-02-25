app.component('photo-item', {
    props: {
        task: Object,
    },
    template:
    /*html*/
        `
    <div class="bg-white border rounded-sm max-w-md ">
        <div class="flex items-center px-4 py-3 ">
            <img class="h-8 w-8 rounded-full " v-bind:src="task.profile " />
            <div class="ml-3 ">
                <span class="text-sm font-semibold antialiased block leading-tight ">{{task.userName}}</span>
                <span class="text-gray-600 text-xs block ">{{task.description}}</span>
            </div>
        </div>
        <img v-bind:src="task.img " @click="clickToggleView(task) " class="md:h-72" />
        <div class="flex items-center justify-between mx-4 mt-3 mb-2 ">
            <div class="flex gap-5 ">
                <i v-show="!task.heart " class="far fa-2x fa-heart text-black hover:text-red-600 transition duration-500 " @click="clickLike(task)"></i>
                <i v-show="task.heart " class="fas fa-2x fa-heart text-red-500 transition duration-500 " @click="clickLike(task) "></i>
                <div class="font-semibold text-sm mt-2 mb-4 ">likes</div>
            </div>
        </div>
    </div>
       `,
    methods: {
        clickLike(task) {
            this.$emit("when-like", task);
        },
        clickToggleView(task) {
            this.$emit("when-toggleview", task);
        },
    },
})