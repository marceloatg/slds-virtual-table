<template>
    <div>
        <h1 class="slds-text-heading_large slds-p-around_medium">
            View 2
        </h1>

        <div class="slds-p-around_medium" style="height: 480px;">
            <slds-virtual-table :columns="columns" :key-field="keyField" :rows="rows"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "View2",
        data() {
            return {
                columns: [
                    {fieldName: 'name', label: 'Name', type: 'text'},
                    {fieldName: 'email', label: 'Email', type: 'text'},
                    {fieldName: 'phone', label: 'Phone', type: 'text'}
                ],
                keyField: 'id',
                rows: [],
            }
        },
        created() {
            for (let i = 0; i < 1000; i++) {
                this.rows.push({
                    id: i,
                    name: `Item number ${i}OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`,
                    email: `user_${i}@arcthos.com`,
                    phone: `(55) ${i}-${i}`,
                })
            }
        },
    }
</script>
