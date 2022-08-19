<template>
  <div class="container mx-auto p-8">
    <h1 class="font-bold text-gray-600 text-lg">Employee Project</h1>
    <form>
      <label for="fname" class="font-semibold p-1">Name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="Enter the name"
        class="border-2 border-black m-1"
      /><br />
      <label class="font-semibold p-1">Gender:</label>
      <input type="radio" id="male" name="gender" value="male" class="m-1" />
      <label for="male">Male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        class="m-1"
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
      />
      <br />
      <label for="contact" class="font-semibold p-1">Contact No:</label>
      <input
        type="number"
        id="contact"
        name="contact"
        placeholder="Enter the contact no"
        class="border-2 border-black m-1"
      />
      <br />
      <label for="salary" class="font-semibold p-1">Salary:</label>
      <input
        type="number"
        id="salary"
        name="salary"
        placeholder="Enter the salary"
        class="border-2 border-black m-1"
      />
      <br />
      <label for="dept" class="font-semibold p-1">Department:</label>
      <input
        type="text"
        id="dept"
        name="dept"
        placeholder="Enter the department"
        class="border-2 border-black m-1"
      />
      <br />
      <button
        class="bg-green-500 p-1 border-2 border-green-500 text-white rounded"
        @click="display"
      >
        Submit
      </button>
    </form>

    <table
      v-if="displayTabel == false"
      class="table-auto border-2 border-black mt-4"
    >
      <thead>
        <tr class="border-2 border-black gap-x-1">
          <th>Name</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Salary</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in employees" :key="i">
          <td v-text="item.name"></td>
          <td v-text="item.gender"></td>
          <td v-text="item.address"></td>
          <td v-text="item.contact"></td>
          <td v-text="item.salary"></td>
          <td v-text="item.dept"></td>
          <td>
            <button
              class="mx-3 my-2 p-1 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20"
            >
              Edit
            </button>
            <button
              class="mx-3 my-2 p-1 rounded-lg bg-red-600 hover:bg-red-600 text-white w-20"
            >
              Delete
            </button>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>Male</td>
          <td>8dwqhshaklshoiqsoquwsrtyuiovvsajl</td>
          <td>457669729</td>
          <td>6879</td>
          <td>fghjjg</td>
          <td>
            <button
              class="mx-3 my-2 p-1 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20"
            >
              Edit
            </button>
            <button
              class="mx-3 my-2 p-1 rounded-lg bg-red-600 hover:bg-red-600 text-white w-20"
            >
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Male</td>
          <td>tstfhqgrtyui</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayTabel: false,
      employees: [],
    };
  },

  methods: {
    display() {
      // alert("Data added");
      this.displayTabel = true;
    },
  },

  // async fetch() {
  //   this.employees = await fetch("http://localhost:3003/employees").then(
  //     (res) => res.json()
  //   );
  // },
};
</script>
