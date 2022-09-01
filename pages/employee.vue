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
        @click="getspecificuser(emp)"
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
        v-model="data.empData.emp_id"
        v-show="show"
      /><br />

      <label for="fname" class="font-semibold p-1">Name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="Enter the name"
        class="border-2 border-black m-1"
        v-model="data.empData.emp_name"
      />
      <li
        v-for="error in v$.emp_name.$errors"
        :key="error.$uid"
        class="text-red-600"
      >
        {{ error.$message }}
      </li>

      <br />
      <label class="font-semibold p-1">Gender:</label>
      <input
        type="radio"
        id="male"
        name="gender"
        v-model="data.empData.emp_gender"
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
        v-model="data.empData.emp_gender"
      />
      <label for="female">Female</label>
      <li
        v-for="error in v$.emp_gender.$errors"
        :key="error.$uid"
        class="text-red-600"
      >
        {{ error.$message }}
      </li>
      <br />
      <label for="address" class="font-semibold p-1">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Enter the address"
        class="border-2 border-black m-1"
        v-model="data.empData.emp_address"
      />
      <li
        v-for="error in v$.emp_address.$errors"
        :key="error.$uid"
        class="text-red-600"
      >
        {{ error.$message }}
      </li>
      <br />
      <label for="contact" class="font-semibold p-1">Contact No:</label>
      <input
        type="number"
        id="contact"
        name="contact"
        placeholder="Enter the contact no"
        class="border-2 border-black m-1"
        v-model="data.empData.emp_contact"
      />
      <li
        v-for="error in v$.emp_contact.$errors"
        :key="error.$uid"
        class="text-red-600"
      >
        {{ error.$message }}
      </li>
      <br />
      <label for="salary" class="font-semibold p-1">Salary:</label>
      <input
        type="number"
        id="salary"
        name="salary"
        placeholder="Enter the salary"
        class="border-2 border-black m-1"
        v-model="data.empData.emp_salary"
      />
      <li
        v-for="error in v$.emp_salary.$errors"
        :key="error.$uid"
        class="text-red-600"
      >
        {{ error.$message }}
      </li>
      <br />
      <label for="dept" class="font-semibold p-1">Department:</label>
      <input
        type="text"
        id="dept"
        name="dept"
        placeholder="Enter the department"
        class="border-2 border-black m-1"
        v-model="data.empData.emp_dept"
      />
      <li
        v-for="error in v$.emp_dept.$errors"
        :key="error.$uid"
        class="text-red-600"
      >
        {{ error.$message }}
      </li>
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
import useVuelidate from "@vuelidate/core";
// import { ref } from "vue";
import { reactive } from "vue";
import { maxLength, minLength, required, alpha } from "@vuelidate/validators";

// show: true;

let data = reactive({
  empData: {
    emp_id: null,
    emp_name: "",
    emp_gender: "",
    emp_address: "",
    emp_contact: "",
    emp_salary: "",
    emp_dept: "",
  },
});

const valid = {
  emp_name: {
    required,
    minLength: minLength(5),
    maxLength: maxLength(30),
    alpha,
  },
  emp_gender: { required },
  emp_address: { required },
  emp_contact: { required, minLength: minLength(10), maxLength: maxLength(10) },
  emp_salary: { required },
  emp_dept: { required },
};

// let emp = "";
const v$ = useVuelidate(valid, data.empData);

let state = reactive({
  select: true,
  items: [],
  id: "",
});

async function onEdit(id) {
  state.select = false;
  const edit: any = await $fetch("http://localhost:3003/employees/" + id);
  data.empData.emp_name = edit.emp_name;
  data.empData.emp_gender = edit.emp_gender;
  data.empData.emp_address = edit.emp_address;
  data.empData.emp_contact = edit.emp_contact;
  data.empData.emp_salary = edit.emp_salary;
  data.empData.emp_dept = edit.emp_dept;

  state.id = edit.emp_id;
}

function postall() {
  if (state.select === true) {
    saveEmpData();
  } else {
    const id = state.id;
    put(id);
  }
}

getAllEmp();
// GET API
async function getAllEmp() {
  state.items = await $fetch("http://localhost:3003/employees");
}

async function saveEmpData(e) {
  e.preventDefault();
  console.log("we are in post", data.empData.emp_id);

  const result = await v$.value.$validate();

  if (result) {
    const sampleData = {
      emp_id: null,
      emp_name: data.empData.emp_name,
      emp_gender: data.empData.emp_gender,
      emp_address: data.empData.emp_address,
      emp_contact: data.empData.emp_contact,
      emp_salary: data.empData.emp_salary,
      emp_dept: data.empData.emp_dept,
    };
    const response = await $fetch("http://localhost:3003/employees", {
      method: "POST",
      body: JSON.stringify(sampleData),
    });
    getAllEmp();
  } else {
    alert("Data ache se daalo warna mat daalo");
  }
}

let emp = "";
async function getspecificuser(emp) {
  console.log(emp);
  const response = await $fetch("http://localhost:3003/employees/" + emp);
  state.items = [response];
}

async function put(id) {
  const sampleData = {
    emp_id: data.empData.emp_id,
    emp_name: data.empData.emp_name,
    emp_gender: data.empData.emp_gender,
    emp_address: data.empData.emp_address,
    emp_contact: data.empData.emp_contact,
    emp_salary: data.empData.emp_salary,
    emp_dept: data.empData.emp_dept,
  };
  console.log(id, sampleData);
  await $fetch("http://localhost:3003/employees/" + id, {
    method: "PUT",
    body: JSON.stringify(sampleData),
  });
  alldata();
  state.select = true;
}

// Delete API
async function onDelete(id: number) {
  await $fetch("http://localhost:3003/employees/" + id, {
    method: "DELETE",
  });
  getAllEmp();
}
</script>
