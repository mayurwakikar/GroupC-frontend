<template>
<main class="flex justify-center bg-[url('https://png.pngtree.com/background/20210711/original/pngtree-creative-synthetic-city-business-elite-silhouette-background-picture-image_1065175.jpg')] ">
    <div>
        <div>
            <form  @submit="customSubmit" @reset="customEdit" class="bg-white-100  rounded-lg border-none px-12 ">
                <table class="grid  content-center">
                    <h2 class="text-teal-900  text-center font-bold text-4xl pt-6">Student Registration</h2>
                    <hr />
                    <br />
                    <label class="font-bold  text-xl" for="firstname">First name:</label>
                    <input type="text" class="  border-black rounded-lg border-2" v-model="user.firstname" id="firstname" name="firstname" placeholder="Enter your first name" />
                    <label class="font-bold text-xl pt-3" for="lastname">Last name:</label>
                    <input type="text" class="  border-black rounded-lg border-2"  v-model="user.lastname" id="lastname" name="lastname" placeholder="Enter your Last name" />
                    <label class="font-bold text-xl pt-3" for="email">Email Id: </label>
                    <input type="email" class="  border-black rounded-lg border-2"  v-model="user.email" id="email" name="email" placeholder="Enter your Email id" />
                    <label class="font-bold text-xl pt-3" for="number">Phone Number: </label>
                    <input type="number" class="  border-black rounded-lg border-2"  v-model="user.number" id="number" name="number" placeholder="Enter your number" />
                    <label class="font-bold text-xl pt-3" for="address">Address: </label>
                    <input type="number" class="  border-black rounded-lg border-2"  v-model="user.address"  name="address" placeholder="Enter your Address" />
                    <!-- <div class="pt-3"> -->
                    <!-- </div> -->
                    <div class="text-center pt-10">
                        <button class="py-2 px-10 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" type="submit" @click="customSubmit">submit </button>
                        <button class="py-2 px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" type="reset"> Cancel </button>
                    </div>
                </table>
            </form>
        </div>
        <br>
        <div >
            <table class="list bg-white-100">
                <h1 class="text-teal-900 text-xl font-bold pt-1">DataBase table:</h1>
                <tr>
                    <th class="px-4 border-black rounded-lg border-2">Id</th>
                    <th class="px-4 border-black rounded-lg border-2">First Name</th>
                    <th class="px-4 border-black rounded-lg border-2">Last Name</th>
                    <th class="px-4 border-black rounded-lg border-2">Email Id</th>
                    <th class="px-4 border-black rounded-lg border-2">Number</th>
                    <th class="px-4 border-black rounded-lg border-2">Address</th>
                    <th class="px-4 border-black rounded-lg border-2">Action</th>
                </tr>
                <tr v-for="(item, i) in myarr" :key="item">
                    <td class="px-4 border-black rounded-lg border-2">{{item.id = i+1}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.firstname}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.lastname}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.email}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.number}}</td>
                    <td class="px-4 border-black rounded-lg border-2">{{item.address}}</td>
                    <button class="py-1 px-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md " type="delete" @click="customDelete(i)"> Delete </button>
                    <button class="py-1 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md" type="edit" @click="customEdit(i)"> Edit </button>
                </tr>
            </table>
        </div>
    </div>
</main>
</template>
<script>
//import { isThisExpression } from '@babel/types';
export default {
    data() {
        return {
            // formshow: false,
            isEdit: false,
            indexEdit: -1,
            myarr: [],
            user: {
                id: 0,
                firstname: '',
                lastname: '',
                email: '',
                number: '',
                address: '',
            },
        };
    },
    methods: {
        customSubmit(event) {
            event.preventDefault();
            if (this.isEdit == true) {
                this.myarr[this.indexEdit] = this.user;
                this.isEdit = false;
                this.indexEdit = -1;
            } else {
                this.myarr.push(this.user);
            }
            this.user = {
                id: 0,
                firstname: '',
                lastname: '',
                email: '',
                number: '',
                address: '',
            };
        },
        customDelete(index) {
            this.myarr.splice(index, 1);
        },
        customEdit(index) {
            this.user.firstname = this.myarr[index].firstname;
            this.user.lastname = this.myarr[index].lastname;
            this.user.email = this.myarr[index].email;
            this.user.number = this.myarr[index].number;
            this.user.address = this.myarr[index].address;
            this.isEdit = true;
            this.indexEdit = index;
        },
    }
}
</script>
