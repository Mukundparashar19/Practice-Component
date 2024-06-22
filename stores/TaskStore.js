import { defineStore  } from "pinia";
 export const useTaskStore = defineStore({
     id: 'taskStore',
     state: () => ({
         task: [],
         indi: [],
         newTask: [],
         acc:[],
         Forminfo:[],
         jsonArray:[]


     }),
     getters: {

     },
     actions: {
         async getData() {

             const res = await fetch('https://jsonplaceholder.org/users')
             const data = await res.json()
             this.task = data

         },

         async indiData(name) {
           const response = await fetch('https://jsonplaceholder.org/users/' + name)
             const data = await response.json()
             this.indi = data


         },
         async getNewData() {

             const nRes = await fetch('https://jsonplaceholder.org/users')
             const data = await nRes.json()
             data.splice(8,30)
             this.newTask = data
            //  console.log(data)

         },
         clicked(value){
             if(value === undefined){
                 return
             }
          console.log(value)
         },
         
         async formData(formData) {
          // Push Formdata into the Forminfo array
            this.Forminfo.push({...formData});
            //  console.log(this.Forminfo)
             
            
        },  
        async perApi(){
            const res = await fetch('../db.json')
             const data = await res.json()
             this.jsonArray = data
             console.log(this.jsonArray);
        }


     }
 })