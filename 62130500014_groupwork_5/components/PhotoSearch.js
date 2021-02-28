app.component('photo-serarch', {
    props: {
        searchtext: String,
        search: Boolean,
        countlikes: Number,
    },
    template:
    /*html*/
        ` 
<header class="bg-white p-6 shadow-lg fixed w-full"> 
    <div class="flex relative max-w-6xl mx-auto">
        <div class="font-mono text-2xl bg-red-500 p-4 rounded-full text-white">
                <i class="fas fa-heart pr-2"></i> Like ({{ countlikes }})
        </div>
        <div class="self-center ml-auto">
            <span :class="{'hidden' : search}">
                <i class="fas fa-2x fa-search cursor-pointer" @click="searching"></i>
            </span>
            <span :class="{'hidden' : !search}">
                <input class="p-1 pl-6 border-2 rouned rounded-2xl border-gray-700 mx-2 w-80 focus:outline-none"
                    placeholder="Please enter text for searching"  :value="searchtext" @input="$emit('update:searchtext', $event.target.value)">
                <button
                    class="mx-2 rouned rounded-3xl text-white px-4 py-2 bg-blue-500 hover:bg-blue-700 focus:outline-none"
                    @click="searching()+cancel() ">Cancel</button>
            </span>
        </div>
    </div>
</header>
      `,

    methods: {
        searching() {
            this.$emit("when-search")
        },
        cancel() {
            this.$emit("when-cancel");
        },
    },
})