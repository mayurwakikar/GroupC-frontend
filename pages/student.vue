<template>
<main class="flex justify-center bg-[url('https://png.pngtree.com/background/20210711/original/pngtree-creative-synthetic-city-business-elite-silhouette-background-picture-image_1065175.jpg')] ">
    <div>
        <div>
            <form method="POST" class="bg-white-100  rounded-lg border-none px-12 ">
                <table class="grid  content-center">
                    <h2 class="text-teal-900  text-center font-bold text-4xl pt-6">Student Registration</h2>
                    <hr />
                    <br />
                    <label class="font-bold  text-xl" for="id">id:</label>
                    <input type="text" class="  border-black rounded-lg border-2" v-model="id" id="firstname" name="firstname" placeholder="Enter your id" />
                    <label class="font-bold  text-xl" for="firstname">First name:</label>
                    <input type="text" class="  border-black rounded-lg border-2" v-model="firstname" id="firstname" name="firstname" placeholder="Enter your first name" />
                    <label class="font-bold text-xl pt-3" for="lastname">Last name:</label>
                    <input type="text" class="  border-black rounded-lg border-2"  v-model="lastname" id="lastname" name="lastname" placeholder="Enter your Last name" />
                    <label class="font-bold text-xl pt-3" for="email">Email Id: </label>
                    <input type="email" class="  border-black rounded-lg border-2"  v-model="email" id="email" name="email" placeholder="Enter your Email id" />
                    <label class="font-bold text-xl pt-3" for="mobile">Phone Number: </label>
                    <input type="number" class="  border-black rounded-lg border-2"  v-model="mobile" id="mobile" name="mobile" placeholder="Enter your number" />
                    <label class="font-bold text-xl pt-3" for="address">Address: </label>
                    <input type="text" class="  border-black rounded-lg border-2" id="address" v-model="address"  name="address" placeholder="Enter your Address" />
                    <!-- <div class="pt-3"> -->
                    <!-- </div> -->
                    <div class="text-center pt-10">
                        <button class="py-2 px-10 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" type="submit" @click="editStudentApi">update </button>
                        <button class="py-2 px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" @click="save" onclick="save()"> Add </button>
                        <button class="py-2 px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"  @click="getalldata" onclick="getallstudent()"> Get All Data</button>
                      <label class="font-bold  text-xl" for="id">id:</label>
                      <input type="text" class="  border-black rounded-lg border-2" v-model="id" id="firstname" name="firstname" placeholder="Enter your id" />
                    </div>
                    <button class="py-2 px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"  @click="getspecificstudent" onclick="getspecificstudent()"> GetspecificStudent</button>
                </table>
            </form>
        </div>
        <br>
        <div >
            <table item="items" id="showdata" class="list bg-white-100">
                <h1 class="text-teal-900 text-xl font-bold pt-1">DataBase table:</h1>
                <tr>
                    <th class="px-4 border-black rounded-lg border-2">Id</th>
                    <th class="px-4 border-black rounded-lg border-2">First Name</th>
                    <th class="px-4 border-black rounded-lg border-2">Last Name</th>
                    <th class="px-4 border-black rounded-lg border-2">Email Id</th>
                    <th class="px-4 border-black rounded-lg border-2">Phone no</th>
                    <th class="px-4 border-black rounded-lg border-2">Address</th>
                    <th class="px-4 border-black rounded-lg border-2">Action</th>
                </tr>
                <tr v-for="item in state.items" :key="item">
                    <td class="px-4 border-black rounded-lg border-2">{{item.id}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.firstname}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.lastname}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.email}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.mobile}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.address}}</td>
                    <button class="py-1 px-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md " type="delete" @click="deletespecificstudent(item.id)"> Delete </button>
                    <button class="py-1 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md" type="edit"  @click="editStudent(item)"> Edit </button>
                </tr>
            </table>
        </div>
    </div>
</main>
</template>


<script setup>
import { ref } from "vue";

const id = ref("");
const firstname= ref("");
const lastname = ref("");
const email= ref("");
const mobile = ref("");
const address = ref("");
let state = reactive({
  
  items: [],
});
getallstudent();

async function getallstudent() {
  state.items = await $fetch("http://localhost:3003/student");
}
async function save() {
  console.log("we are in post", id.value);
  const sampleData = {
    id: id.value,
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    mobile: mobile.value,
    address: address.value,



    //    id: id.value,
    // firstname: firstname.value,
    // lastname: lastname.value,
    // email: email.value,
    // number: number.value,
    // address: address.value,
  };
  const response = await $fetch("http://localhost:3003/student", {
    method: "POST",
    body: JSON.stringify(sampleData),
  });
  getallstudent();
}
//getspecific student
async function getspecificstudent() {
  console.log(id);
  const response = await $fetch("http://localhost:3003/student/" + id.value);
  state.items = [response];
}
//Delete Api
async function deletespecificstudent(id) {
  await $fetch("http://localhost:3003/student/" + id, {
    method: "DELETE",
  });
  getallstudent();
}
async function editStudent(student) {
  (this.id = student.id),
    (this.firstname= student.firstname),
    (this.lastname = student.lastname),
    (this.email= student.email),
    (this.mobile= mobile.number),
    (this.address = student.address);
}
async function editStudentApi(student) {
  
  const response = await $fetch("http://localhost:3003/student/" + id.value, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id.value,
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    mobile: mobile.value,
    address: address.value,
    }),
  });
  console.log(response);
  getallstudent();
}
</script>