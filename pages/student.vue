<template>
<main class="flex justify-center bg-[url('https://png.pngtree.com/background/20210711/original/pngtree-creative-synthetic-city-business-elite-silhouette-background-picture-image_1065175.jpg')] ">
    <div>
        <div>
            <form method="POST" class="bg-white-100  rounded-lg border-none px-12 ">
                <table class="grid  content-center">
                    <h2 class="text-teal-900  text-center font-bold text-4xl pt-6">Student Registration</h2>
                    <hr />
                    <br />
                    <!-- <label class="font-bold  text-xl" for="id">id:</label>
                    <input type="text" class="  border-black rounded-lg border-2" v-model="sampleData.id"  id="firstname" name="firstname" placeholder="Enter your id" /> -->
                    <label class="font-bold  text-xl" for="firstname">First name:</label>
                    <input type="text" class="  border-black rounded-lg border-2" v-model="sampleData.firstname"  id="firstname" name="firstname" placeholder="Enter your first name" />
                    <span v-for="error in v$.firstname.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
                    <label class="font-bold text-xl pt-3" for="lastname">Last name:</label>
                    <input type="text" class="  border-black rounded-lg border-2" v-model="sampleData.lastname" id="lastname" name="lastname" placeholder="Enter your Last name" />
                    <span v-for="error in v$.lastname.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
                    <label class="font-bold text-xl pt-3" for="email">Email Id: </label>
                    <input type="email" class="  border-black rounded-lg border-2" v-model="sampleData.email" id="email" name="email" placeholder="Enter your Email id" />
                    <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
                    <label class="font-bold text-xl pt-3" for="address">Address: </label>
                    <input type="text" class="  border-black rounded-lg border-2" id="address" v-model="sampleData.address" name="address" placeholder="Enter your Address" />
                    <span v-for="error in v$.address.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
                    <!-- <div class="pt-3"> -->
                    <!-- </div> -->
               
       
    

                    <div class=" flex text-center pt-10 space-x-4">
                        <!-- <button class="py-2 px-10 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" type="submit" @click="editStudentApi">update </button> -->
                        <button class="py-2 px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md space-x-4 mb-3" type="submit" @click="onSubmitForm()">submit </button>
                        <button class="py-2 px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" type="reset">Reset </button>
                        <!-- <button class="py-2 px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" @click="getalldata" onclick="getallstudent()"> Get All Data</button> -->
                        <!-- <label class="font-bold  text-xl" for="id">id:</label>
                        <input type="text" class="  border-black rounded-lg border-2" v-model="id" id="firstname" name="firstname" placeholder="Enter your id" /> -->
                    <!-- </div> -->
                    <!-- <div class="mt-4"> -->
                        <!-- <p class="text-red-500">Errors:</p>
            <span v-for="error in v$.$errors" :key="error.$uid">
              {{ error.$property }} - {{ error.$message }}
              </span>-->
                    </div>
    



                    <!-- <button class="py-2 px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" @click="getspecificstudent" onclick="getspecificstudent()"> GetspecificStudent</button> -->
            </table>
          </form> 
        </div> 
        </div>
        <br>
        <div>
            <table item="items" id="showdata" class="list bg-white-100">
                <h1 class="text-teal-900 text-xl font-bold pt-1">DataBase table:</h1>
                <tr>
                    <th class="px-4 border-black rounded-lg border-2">Id</th>
                    <th class="px-4 border-black rounded-lg border-2">First Name</th>
                    <th class="px-4 border-black rounded-lg border-2">Last Name</th>
                    <th class="px-4 border-black rounded-lg border-2">Email Id</th>

                    <th class="px-4 border-black rounded-lg border-2">Address</th>
                    <th class="px-4 border-black rounded-lg border-2">Action</th>
                </tr>
                <tr v-for="item of State.allStud" :key="item.id">
                    <td class="px-4 border-black rounded-lg border-2">{{item.id}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.firstname}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.lastname}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.email}}</td>

                    <td class="px-4 border-black rounded-lg border-2">{{item.address}}</td>
                    <button class="py-1 px-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md "     @click="onDeleteOfStudent(item.id)"> Delete </button>
                    <button class="py-1 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md" @click="onClickOfEditStudent(item.id)"> Edit </button>
                </tr>
            </table>
         
        </div>
    <!-- </div> -->
  
</main>
</template>

<script lang="ts">
import useVuelidate, {
    required,
    minLength,
    email,
    alpha,
    maxLength,
} from "~/utils/vuelidate/useVuelidate";
</script>
<script lang="ts" setup>
// import { required, minLength, between } from 'vuelidate/lib/validators';
import {
    reactive,
    computed
} from "vue";
let Check1: any;
let State = reactive({
    select: true,
    Submit: "submit",
    allStud: [],
    StudDetails: [],
    id: "",
    //errorBack: {},
});
let sampleData = reactive({
    firstname: "",
    lastname: "",
    email: "",
    address: "",

});
const rules = computed(() => {
    return {
        firstname: {
            required,
            alpha,
            minLength: minLength(3),
            maxLength: maxLength(35),
        },
        lastname: {
            required,
            alpha,
            minLength: minLength(6),
            maxLength: maxLength(12),
        },

        email: {
            required,
            email
        },
        address: {
            required
        },
    };
});
const v$ = useVuelidate(rules, sampleData);
getStdAPI();
// GET API
async function getStdAPI() {
    State.allStud = await $fetch("http://localhost:3003/student/");
}
async function clearData() {
    sampleData.firstname = "";
    sampleData.lastname = "";
    sampleData.email = "";
    sampleData.address = "";

}
// POST API
async function onSubmitForm() {
    const result = await v$.value.$validate();
    event.preventDefault();
    if (State.select === true) {
        const response = await $fetch("http://localhost:3003/student/", {
            method: "POST",
            body: JSON.stringify(sampleData),
        });
        alert("data Added successfully...");
    } else {
        putData();
        alert("data updated Successfully...");
        State.Submit = "Submit";
    }
    getStdAPI();
    clearData();
    this.$nuxt.refresh();
}
// PATCH API
async function onClickOfEditStudent(id) {
    State.Submit = "Update";
    State.select = false;
    const studEdit: any = await $fetch(
        "http://localhost:3003/student/" + id
    );
    State.id = studEdit.id;
    console.log(State.id);
    sampleData.firstname = studEdit.Firstname;
    sampleData.lastname = studEdit.Lastame;

    sampleData.email = studEdit.email;
    sampleData.address = studEdit.address;

}
async function putData() {
    const id = State.id;
    const response = await $fetch(
        "http://localhost:3003/student/" + id, {
            method: "PATCH",
            body: sampleData,
        }
    );
    getStdAPI();
    clearData();
}
// Delete API
async function onDeleteOfStudent(id) {
    await $fetch("http://localhost:3003/student/" + id, {
        method: "DELETE",
    });
    getStdAPI();
}
async function getSpecificStudent(check: string) {
    console.log("abc");
    if (check != null) {
        State.StudDetails = State.allStud.filter((stdID) => {
            let id1 = check.toString();
            let id2 = stdID.id.toString();
            let firstName1 = check.toLocaleLowerCase();
            let firstName2 = stdID.firstName.toLocaleLowerCase();
            let lastName1 = check.toLocaleLowerCase();
            let lastName2 = stdID.lastName.toLocaleLowerCase();

            let email1 = check.toString();
            let email2 = stdID.email.toString();
            let address1 = check.toString();
            let address2 = stdID.address.toString();
            if (
                id2.startsWith(id1) ||
                firstName2.startsWith(firstName1) ||
                lastName2.startsWith(lastName1) ||

                email2.startsWith(email1) ||
                address2.startsWith(address1)
            ) {
                console.log(stdID);
                return stdID;
            }
        });
    }
    if (check == "") {
        State.StudDetails = State.allStud;
    }
}
// const { error: backError, data: posts } = await useFetch(
//   "http://localhost:3001/student-managment/",
//   {
//     method: "POST",
//     body: JSON.stringify(sampleData),
//   }
// );
// State.errorBack = backError;
// console.log(backError);
// console.log(posts);
</script>
