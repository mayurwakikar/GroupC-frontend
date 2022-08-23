
<template>
<div>
      <h1 class="font-bold text-center text-2xl mt-10">Book Management System</h1>
        <div class="  grid grid-cols-2  ">
          <div class="border-black  border-2 m-8 p-8">
            <form method="post" class="bg-gray-400 border-black rounded-lg border-2 px-12">
            <table>
                <h2 class="text-teal-900 text-xl font-bold pt-6">Lets Add a Book To Libaray</h2>
                <hr />
                <!-- <label class="pt-10 py-10 mt-4" for="id">Book Id</label><br />
                <input type="text"  id="id" name="id" placeholder="" v-model="book_id"  /><br /><br /> -->
                <label for="author">Book Name</label><br />
                <input type="text"  id="name" name="name" placeholder="" v-model="book_name"/><br /><br />
                <label for="author">Book Author</label><br />
                <input type="text"  id="author" name="author" placeholder="" v-model="book_author"/><br /><br />
                <label for="image">Book Image</label><br />
                <input type="text"  id="image" name="image" placeholder="" v-model="book_image"/><br /><br />
                <label for="price">Book Price</label><br />
                <input type="number"  id="price" name="price" placeholder="" v-model="book_price"/><br /><br />
                <label for="isbn">Book ISbn</label><br />
                <input type="number"  id="isbn" name="isbn" placeholder="" v-model="book_isbn"/><br /><br />
                    
                <div class="mt-10">
                    <button class="py-1 px-5 mr-5 bg-black hover:bg-blue-400 text-white font-bold text-center rounded-md mb-3" type="submit" @click="formSubmit">Add Book</button>
                    <button class="py-1 px-5 bg-black hover:bg-blue-400 text-white font-bold text-center rounded-md mb-3" type="reset">Reset</button>
                    <button class="mx-3 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20" @click="getalldata">
                        get all Books
                    </button>
                </div>
            </table>
        </form>
        </div>
        <div class="border-black  border-2 m-8 p-8">
        <table class="list">
            <tr>
                <!-- <th class="px-4 border-black rounded-lg border-2">id</th> -->
                <th class="px-4 border-black rounded-lg border-4">Book Name</th>
                <th class="px-4 border-black rounded-lg border-4">Book Author</th>
                <th class="px-4 border-black rounded-lg border-4">Book Image</th>
                <th class="px-4 border-black rounded-lg border-4">Book Price</th>
                 <th class="px-4 border-black rounded-lg border-4">Book ISbn</th>
                <th class="px-4 border-black rounded-lg border-4">Action</th>
            </tr>
            <tr v-for="(item) in state.items"  :key="item">
                <!-- <td class="px-4 border-black rounded-lg border-2">{{item.id=i+1}}</td> -->
                <td class="px-4 border-black rounded-lg border-4">{{item.book_name}}</td>
                <td class="px-4 border-black rounded-lg border-4">{{item.book_author}}</td>
                <td class="px-4 border-black rounded-lg border-4">{{item.book_image}}</td>
                <td class="px-4 border-black rounded-lg border-4">{{item.book_price}}</td>
                <td class="px-4 border-black rounded-lg border-4">{{item.book_isbn}}</td>
                <!-- <td class="px-4 border-green-400 rounded-lg border-4">
                    <img src="{{item.Image}}" alt="" srcset="">
                </td> -->
                <td class="px-4 border-black rounded-lg border-4">{{item.Action}}
                    <button class="mx-3 rounded-lg bg-red-600 hover:bg-red-700 text-white w-20" type="submit" @click="userDelete(index)">
                        Delete
                    </button>
                    <button class="mx-3 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20" @click="onEdit(index)">
                        Edit
                    </button>
                     
                </td>
            </tr>
        </table>
        </div>
    </div>
    </div>
</template>
<!-- <script>
export default {
    data() {
        return {
            isEdit:false,
            indexEdit:-1,
            users: [],
            userAddress:'',
            user: {
                ProductName: '',
                Price: '',
                Stock: '',
                Size: '',
                Image:'',
            },
        };
    },
    methods: {
        formSubmit(event) {
            event.preventDefault();
            // if(this.user.ProductName==""||this.user.ProductName==null||this.user.Price==""|| this.user.Price==null|| this.user.Stock==""||this.user.Stock==null|| this.user.Color==""||this.user.Color==null)
            // {alert("please fill all the fields");
            // this.onReset();
            // }else{console.log("Hi");}
            if(this.isEdit==true){
                this.users[this.indexEdit]=this.user;
                this.isEdit=false;
                this.indexEdit=-1;
            }
            else{
                 this.users.push(this.user);
            }
           this.user = {
                ProductName: '',
                Price: '',
                Stock: '',
                Size: '',
                Image:'',
            };
        },
        onReset(event) {
            event.preventDefault();
            this.form.ProductName = "";
            this.form.Price = "";
            this.form.Stock = "";
            this.form.Size = "";
            this.form.Image = "";
        },
        userDelete(index) {
            this.users.splice(index, 1)
        },
        onEdit(index){
            this.user.ProductName=this.users[index].ProductName;
            this.user.Price=this.users[index].Price;
            this.user.Stock=this.users[index].Stock;
            this.user.Size=this.users[index].Size;
            this.user.Image=this.users[index].Image;
            this.isEdit=true;
            this.indexEdit=index;
        },
    }
}
</script> -->


<script setup>
import { ref } from "vue";
// how define multiple variable/ref in single reactive state
// Access in html template
const book_id = ref("");
const book_name = ref("");
const book_author = ref("");
const book_image = ref("");
const book_price = ref("");
const book_isbn = ref("");
let state = reactive({
  // allBooks: []
  items: [],
});
getalldata();

async function  getalldata(){
    state.items = await $fetch("http://localhost:3003/book");
}


// 2nd part 
async function formSubmit() {
  console.log("we are in post", book_id.value);
  const sampleData = {
    book_id: book_id.value,
   book_name: book_name.value,
    book_author:book_author.value,
    book_image: book_image.value,
    book_price: book_price.value,
    book_isbn: book_isbn.value, 
  };
  const response = await $fetch("http://localhost:3003/book", {
    method: "POST",
    body: JSON.stringify(sampleData),
  });
//   getalldata();
}

</script>
