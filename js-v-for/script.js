const { createApp } = Vue;

createApp({
    data(){
        return{
            nameArray: [{ name: 'Ginetta' }, { name: 'Gina' }, { name: 'Ginetto' }, { name: 'Gino' }]
        }
    }
}).mount("#for-cicle");