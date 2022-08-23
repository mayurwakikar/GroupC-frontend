<script setup>
import { ref } from "vue";
// how define multiple variable/ref in single reactive state
// Access in html template
const user_id = ref("");
const email = ref("");
const name = ref("");
const gender = ref("");
const mobile_number = ref("");
const address = ref("");
let state = reactive({
  // allBooks: []
  items: [],
});
getalldata();
// GET API
async function getalldata() {
  state.items = await $fetch("http://localhost:3001/user");
}
async function save() {
  console.log("we are in post", user_id.value);
  const sampleData = {
    user_id: user_id.value,
    email: email.value,
    name: name.value,
    gender: gender.value,
    mobile_number: mobile_number.value,
    address: address.value,
  };
  const response = await $fetch("http://localhost:3001/user", {
    method: "POST",
    body: JSON.stringify(sampleData),
  });
  getalldata();
}
//getspecific user
async function getspecificuser() {
  console.log(user_id);
  const response = await $fetch("http://localhost:3001/user/" + user_id.value);
  state.items = [response];
}
//Delete Api
async function deletespecificuser(user_id) {
  await $fetch("http://localhost:3001/user/" + user_id, {
    method: "DELETE",
  });
  getalldata();
}
async function editUser(user) {
  (this.user_id = user.user_id),
    (this.name = user.name),
    (this.mobile_number = user.mobile_number),
    (this.gender = user.gender),
    (this.email = user.email),
    (this.address = user.address);
}
async function editUserApi(user) {
  // const response = await fetch("http://localhost:3001/user/" + this.user_id, {
  const response = await $fetch("http://localhost:3001/user/" + user_id.value, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      user_id: user_id.value,
      email: email.value,
      name: name.value,
      gender: gender.value,
      mobile_number: mobile_number.value,
      address: address.value,
    }),
  });
  console.log(response);
  getalldata();
}
</script>
<style scoped>
body {
  justify-content: space-around;
  align-items: center;
  height: 60vh;
  display: grid;
  flex-direction: column;
  font-family: sans-serif;
}
.form {
  position: relative;
  width: 20%;
  height: 60px;
  overflow: hidden;
}
.form input {
  width: 100%;
  height: 100%;
  color: #595f6e;
  padding-top: 20px;
  border: none;
  outline: none;
}
.form label {
  position: absolute;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid black;
  /* transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in; */
}
.form label::after {
  position: absolute;
  content: "";
  bottom: -1px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  border-bottom: 3px solid #5fa8d3;
  /* transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in; */
}
.content-name {
  position: absolute;
  bottom: 5px;
  transition: all 0.3s ease;
  left: 0px;
  transition: all 0.3s ease;
}
.form input:focus + .label-name .content-name,
.form input:valid + .label-name .content-name {
  transform: translateY(-150%);
  font-size: 14px;
  color: #5fa8d3;
}
.form input:focus + .label-name::after,
.form input:valid + .label-name::after {
  transform: translateX(0%);
}
</style>
<template>
  <div class="border-black border-2 content-center m-4 p-4">
    <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="font-bold text-center underline text-2xl text-sky-400">
      "User Management"
    </div>
    <div class="border-black border-2 content-center items-center m-4 p-4">
      <!-- <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    /> -->
      <form method="POST" class="ml-40">
        <div class="form bg-black items-center content-center">
          <input
            type="text"
            v-model="user_id"
            name="name"
            autocomplete="off"
            required
            class="focus:border-blue-500"
          />
          <label for="user_id" class="label-name">
            <span class="content-name">User Id</span>
          </label>
        </div>
        <div class="form bg-black">
          <input
            type="text"
            v-model="name"
            name="name"
            autocomplete="on"
            required
            class="focus:border-blue-500"
          />
          <label for="name" class="label-name">
            <span class="content-name">Name</span>
          </label>
        </div>
        <!-- <div> -->
        <div class="form bg-black">
          <input
            type="text"
            v-model="gender"
            name="name"
            autocomplete="off"
            required
            class="focus:border-blue-500"
          />
          <!-- <input type="radio" id="male" name="male" value="male">
        <label for="male">male</label>
        <input type="radio" id="female" name="fav_language" value="female">
        <label for="female">female</label> -->
          <label for="gender" class="label-name">
            <span class="content-name">Gender</span>
          </label>
        </div>
        <div class="form bg-black">
          <input
            type="text"
            v-model="address"
            name="name"
            autocomplete="off"
            required
            class="focus:border-blue-500"
          />
          <label for="address" class="label-name">
            <span class="content-name">Address</span>
          </label>
        </div>
        <div class="form bg-black">
          <input
            type="text"
            v-model="email"
            name="name"
            autocomplete="off"
            required
            class="focus:border-blue-500"
          />
          <label for="email" class="label-name">
            <span class="content-name">Email</span>
          </label>
        </div>
        <div class="form bg-black">
          <input
            type="number"
            v-model="mobile_number"
            name="name"
            autocomplete="off"
            required
            class="focus:border-blue-500"
          />
          <label for="mobile_number" class="label-name">
            <span class="content-name">Mobile</span>
          </label>
        </div>
        <div class="mt-20 gap-6 mt-10 ml-5 m-4 p-4">
          <button
            class="font-bold py-2 px-4 ml-5 mr-5 rounded"
            type="button"
            @click="save"
            onclick="save()"
          >
            Add
          </button>
          <button
            class="font-bold py-2 px-4 ml-5 mr-5 rounded"
            type="button"
            @click="editUserApi"
          >
            Update
          </button>
          <label for="id">Your Id</label>
          <input
            class="p-1 border-2"
            type="text"
            v-model="user_id"
            label="id"
          />
          <button
            class="bg-sky-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-5 mr-5 rounded"
            type="button"
            @click="getalldata"
            onclick="getalldata()"
          >
            Get All Data
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-5 mr-5 rounded"
            type="button"
            @click="getspecificuser"
            onclick="getspecificuser()"
          >
            Get Specific User
          </button>
        </div>
      </form>
      <!--
    <div v-once v-show="show">
      {{ getalldata() }}
    </div> -->
    </div>
    <div class="border-black border-2 content-center m-8 p-8">
      <table :item="items" id="showdata">
        <tbody>
          <th class="border-2">User ID</th>
          <th class="border-2">Name</th>
          <th class="border-2">EMAIL</th>
          <th class="border-2">ADDRESS</th>
          <th class="border-2">GENDER</th>
          <th class="border-2">MOBILE NUMBER</th>
          <th class="border-2" colspan="2">Action</th>
          <tr v-for="item in state.items" :key="item">
            <td class="border-2">{{ item.user_id }}</td>
            <td class="border-2">{{ item.name }}</td>
            <td class="border-2">{{ item.email }}</td>
            <td class="border-2">{{ item.address }}</td>
            <td class="border-2">{{ item.gender }}</td>
            <td class="border-2">{{ item.mobile_number }}</td>
            <td class="border-2">
              <button
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-5 mr-5 rounded-full"
                @click="editUser(item)"
              >
                Edit
              </button>
            </td>
            <td class="border-2">
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-5 mr-5 rounded-full"
                @click="deletespecificuser(item.user_id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
  </div>
</template>
