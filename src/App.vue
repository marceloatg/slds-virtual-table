<template>
    <div id="app">

        <div class="slds-button-group slds-p-around_medium">

            <router-link class="slds-button slds-button_neutral" :to="{name: 'view1'}">
                View 1
            </router-link>

            <router-link class="slds-button slds-button_neutral" :to="{name: 'view2'}">
                View 2
            </router-link>

        </div>

        <keep-alive>
            <router-view/>
        </keep-alive>

    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {}
    }
</script>
