const { createApp } = Vue;

createApp({
    data(){
        return{
            nameArray: [{ name: 'Ginetta' }, { name: 'Gina' }, { name: 'Ginetto' }, { name: 'Gino' }],
            numberArray: [1, 2, 5, 6, 7, 1, 0, 2, 4, 5]
        }
    }
}).mount("#for-cicle");