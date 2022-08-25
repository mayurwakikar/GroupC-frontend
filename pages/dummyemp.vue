<template>
  <div class="container mx-auto p-8">
    <h1 class="font-bold text-gray-600 text-lg text-center">
      Employee Project
    </h1>

    <div class="text-center">
      <label for="search" class="font-semibold p-1"
        >Search By Employee Id</label
      >
      <input
        type="number"
        id="search"
        name="search"
        class="border-2 border-black m-1 rounded-lg"
      />
      <button
        class="p-1 rounded-lg bg-sky-400 border-2 border border-black text-black w-20"
        @click="getspecificuser"
      >
        Search
      </button>
    </div>

    <form class="text-center" method="POST">
      <!-- <label for="fname" class="font-semibold p-1">EmpId:</label> -->
      <input
        type="number"
        id="eid"
        name="eid"
        placeholder="Enter the employee id"
        class="border-2 border-black m-1"
        v-model="emp_id"
        v-show="show"
      /><br />
      <label for="fname" class="font-semibold p-1">Name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="Enter the name"
        class="border-2 border-black m-1"
        v-model="emp_name"
      /><br />
      <label class="font-semibold p-1">Gender:</label>
      <input
        type="radio"
        id="male"
        name="gender"
        v-model="emp_gender"
        value="male"
        class="m-1"
      />
      <label for="male">Male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        class="m-1"
        v-model="emp_gender"
      />
      <label for="female">Female</label>
      <br />
      <label for="address" class="font-semibold p-1">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Enter the address"
        class="border-2 border-black m-1"
        v-model="emp_address"
      />
      <br />
      <label for="contact" class="font-semibold p-1">Contact No:</label>
      <input
        type="number"
        id="contact"
        name="contact"
        placeholder="Enter the contact no"
        class="border-2 border-black m-1"
        v-model="emp_contact"
      />
      <br />
      <label for="salary" class="font-semibold p-1">Salary:</label>
      <input
        type="number"
        id="salary"
        name="salary"
        placeholder="Enter the salary"
        class="border-2 border-black m-1"
        v-model="emp_salary"
      />
      <br />
      <label for="dept" class="font-semibold p-1">Department:</label>
      <input
        type="text"
        id="dept"
        name="dept"
        placeholder="Enter the department"
        class="border-2 border-black m-1"
        v-model="emp_dept"
      />
      <br />
      <button
        class="bg-green-500 p-1 border-2 border-green-500 text-white rounded m-2"
        type="submit"
        @click="saveEmpData"
      >
        Submit
      </button>

      <button
        class="py-1 px-5 bg-black text-white font-bold text-center rounded-md mb-3"
        type="submit"
        @click="getAllEmp"
      >
        GetAll
      </button>

      <button type="button">Edit</button>
    </form>

    <table
      class="table-auto border-2 border-black mt-4 place-items-center"
      :item="items"
    >
      <thead>
        <tr class="border-2 border-black gap-x-1">
          <th class="border-2 border-black">EmployeeId</th>
          <th class="border-2 border-black">Name</th>
          <th class="border-2 border-black">Gender</th>
          <th class="border-2 border-black">Address</th>
          <th class="border-2 border-black">Contact</th>
          <th class="border-2 border-black">Salary</th>
          <th class="border-2 border-black">Department</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in state.items"
          :key="item"
          class="border-2 border-black"
        >
          <td class="border-2 border-black text-center">
            {{ item.emp_id }}
          </td>
          <td class="text-black border-2 border-black text-center">
            {{ item.emp_name }}
          </td>
          <td class="border-2 border-black text-center">
            {{ item.emp_gender }}
          </td>
          <td class="border-2 border-black text-center">
            {{ item.emp_address }}
          </td>
          <td class="border-2 border-black text-center">
            {{ item.emp_contact }}
          </td>
          <td class="border-2 border-black text-center">
            {{ item.emp_salary }}
          </td>
          <td class="border-2 border-black text-center">
            {{ item.emp_dept }}
          </td>
          <td>
            <button
              class="mx-3 my-2 p-1 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20"
              type="button"
              @click="onEdit(item.emp_id)"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              class="mx-3 my-2 p-1 rounded-lg bg-red-600 hover:bg-red-600 text-white w-20"
              @click="onDelete(item.emp_id)"
            >
              Delete
            </button>
          </td>
          <!-- <td></td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

show: true;

// editEmp();
const emp_id = ref("");
const emp_name = ref("");
const emp_gender = ref("");
const emp_address = ref("");
const emp_contact = ref("");
const emp_salary = ref("");
const emp_dept = ref("");

let state = reactive({
  items: [],

  form: {
    emp_id: "",
    emp_name: "",
    emp_gender: "",
    emp_address: "",
    emp_contact: "",
    emp_salary: "",
    emp_dept: "",
  },
});

getAllEmp();
// GET API
async function getAllEmp() {
  state.items = await $fetch("http://localhost:3003/employees");
}

async function saveEmpData() {
  console.log("we are in post", emp_id.value);
  const sampleData = {
    emp_id: null,
    emp_name: emp_name.value,
    emp_gender: emp_gender.value,
    emp_address: emp_address.value,
    emp_contact: emp_contact.value,
    emp_salary: emp_salary.value,
    emp_dept: emp_dept.value,
  };
  const response = await $fetch("http://localhost:3003/employees", {
    method: "POST",
    body: JSON.stringify(sampleData),
  });
  getAllEmp();

  async function getspecificuser() {
    console.log(emp_id);
    const response = await $fetch(
      "http://localhost:3003/employees/" + emp_id.value
    );
    state.items = [response];
  }

  async function editEmp(emp) {
    console.log("editamp is used");
    this.emp_id = employees.emp_id;
    this.emp_name = employees.emp_name;
    this.emp_gender = employees.emp_gender;
    this.emp_address = employees.emp_address;
    this.emp_contact = employees.emp_contact;
    this.emp_salary = employees.emp_salary;
    this.emp_dept = employees.emp_dept;
  }
}

async function onEdit(id: number) {
  const response = await $fetch("http://localhost:3003/employees/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      emp_id: emp_id.value,
      emp_name: emp_name.value,
      emp_gender: emp_gender.value,
      emp_address: emp_address.value,
      emp_contact: emp_contact.value,
      emp_salary: emp_salary.value,
      emp_dept: emp_dept.value,
    }),
  });
  console.log(response);
  getAllEmp();
}

// Delete API
async function onDelete(id: number) {
  await $fetch("http://localhost:3003/employees/" + id, {
    method: "DELETE",
  });
  getAllEmp();
}
</script>
