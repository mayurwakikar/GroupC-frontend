<template>
<div>
      <h1 class="font-extrabold text-center text-5xl mt-8">Book Management System</h1> <br/>
      <div>
        <div >
          <div class="text-center">
            <form method="post" class="flex justify-center bg-blue-100 px-12" autocomplete="off">
            <table>
                <hr/><h2 class="text-teal-900 text-xl font-bold pt-6 text-center">Add a Book To Libaray</h2>
                <hr/>
                 <br/>
                <label class="pt-10 py-10 mt-4" for="id">Book Id :- </label>
                <input class=" border-black rounded-md border-2" type="number"  id="id" name="id" placeholder="" v-model="formData.book_id" @change="validationId"/><br/>
                <span class="text-sm text-red-500" v-for="error in v$.book_id.$errors" :key="error.$uid">{{error.$message}}</span>
                <br/><br/>
                <label for="book_name">Book Name:- </label>
                <input class=" border-black rounded-md border-2" type="text"  id="book_name" name="book_name" placeholder="" v-model="formData.book_name" @change="validationName"/><br/>
                <span class="text-sm text-red-500" v-for="error in v$.book_name.$errors" :key="error.$uid">{{error.$message}}</span>
                <br/><br/>
                <label for="book_author">Book Author:- </label>
                <input class=" border-black rounded-md border-2" type="text"  id="book_author" name="book_author" placeholder="" v-model="formData.book_author" @change="validationAuthor"><br/>
                <span class="text-sm text-red-500" v-for="error in v$.book_author.$errors" :key="error.$uid">{{error.$message}}</span>
                <br><br>
                <label for="book_price">Book Price:- </label>
                <input class=" border-black rounded-md border-2" type="number"  id="book_price" name="book_price" placeholder="" v-model="formData.book_price" @change="validationPrice"><br/>
                <span class="text-sm text-red-500" v-for="error in v$.book_price.$errors" :key="error.$uid">{{error.$message}}</span>
                <br><br/>
                <label for="book_image">Book Image:- </label>
                <input class=" border-black rounded-md border-2"  type="text"  id="book_image" name="book_image" placeholder="" v-model="formData.book_image" @change="validationImage"/><br/>
                <span class="text-sm text-red-500" v-for="error in v$.book_image.$errors" :key="error.$uid">{{error.$message}}</span>
                <br/><br/>
                <label for="book_isbn">Book ISbn:- </label>
                <input class=" border-black rounded-md border-2" type="text"  id="book_isbn" name="book_isbn" placeholder="" v-model="formData.book_isbn" @change="validationIsbn"/><br/>
                <span class="text-sm text-red-500"  v-for="error in v$.book_isbn.$errors" :key="error.$uid">{{error.$message}}</span>
                <br/><br/>
                <label for="bookcategory_id">Book Category ID:- </label>
                <input class=" border-black rounded-md border-2" type="number"  id="bookcategory_id" name="bookcategory_id" placeholder="" v-model="formDatacategory.bookcategory_id" @change="validationIsbn"/><br/>
                <span class="text-sm text-red-500"  v-for="error in vv$.bookcategory_id.$errors" :key="error.$uid">{{error.$message}}</span>
                <br/><br/>
                <label for="bookcategory_name">Book Category Name:- </label>
                <!-- <input class=" border-black rounded-md border-2" type="text"  id="bookcategory_name" name="bookcategory_name" placeholder="" v-model="formDatacategory.bookcategory_name"    /><br/>
                <span class="text-sm text-red-500"  v-for="error in vv$.bookcategory_name.$errors" :key="error.$uid">{{error.$message}}</span> -->
                <!-- <br/><br/> -->
                 <select name="bookcategory_name" id="bookcategory_name" v-model="formDatacategory.bookcategory_name" multiple>
                    <option value="category">Book Category</option>
                    <option value="novels">Novels</option>
                    <option value="horror">Horror</option>
                    <option value="adventure">Adventure</option>
                    <option value="education">Educational</option>
                    <option value="history">Historical</option>
                    <option value="geographical">Geographical</option>
                    <option value="business">Business</option>
                    <option value="fitness">Body Fitness</option>
                    <option value="food">Kitechen Food</option>
                </select>
                <div class="mt-10">
                    <button class="py-1 px-5 mr-5 bg-black hover:bg-blue-400 text-white font-bold text-center rounded-md mb-3" type="submit" @click="formSubmit" >Add Book</button>
                    <button class="py-1 px-5 mr-3 bg-black hover:bg-blue-400 text-white font-bold text-center rounded-md mb-3" type="reset">Reset</button>
                    <button class="py-1 px-2 mx-3 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20" @click="getalldata">
                         All Books
                    </button>
                     <button class="py-1 px-2 mx-3 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20" @click="getalldatacategory">
                         All Books Category
                    </button>
                </div>
            </table>
        </form>
        <!-- <div>
            <p>Errors : </p>
            <span v-for="error in v$.errors" :key="error.$uid"></span>
            {{ error.$property }} - {{error.$message}},
        </div> -->
        </div>
        <div class="border-black border-2 m-8 p-8 flex justify-center">
        <table class="list">
            <tr>
                <th class="px-4 border-black rounded-lg border-4">Book Id</th>
                <th class="px-4 border-black rounded-lg border-4">Book Name</th>
                <th class="px-4 border-black rounded-lg border-4">Book Author</th>
                <th class="px-4 border-black rounded-lg border-4">Book Price</th>
                <th class="px-4 border-black rounded-lg border-4">Book Image</th>
                <th class="px-4 border-black rounded-lg border-4">Book ISbn</th>
                <!-- <th class="px-4 border-black rounded-lg border-4">Book Category Name</th> -->
                <th class="px-4 border-black rounded-lg border-4">Action</th>
            </tr>
            <tr v-for="(item) in state.items"  :key="item">
              <td class="px-4 border-black rounded-lg border-4">{{item.book_id}}</td>
              <td class="px-4 border-black rounded-lg border-4">{{item.book_name}}</td>
              <td class="px-4 border-black rounded-lg border-4">{{item.book_author}}</td>
              <td class="px-4 border-black rounded-lg border-4">{{item.book_price}}</td>
              <td class="px-4 border-black rounded-lg border-4">{{item.book_image}}</td>
              <td class="px-4 border-black rounded-lg border-4">{{item.book_isbn}}</td>
              <!-- <td class="px-4 border-black rounded-lg border-4">{{item.bookcategory_name}}</td> -->
              <td class="px-4 border-black rounded-lg border-4">{{item.Action}}
                <button class="mx-3 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20" @click="editBook(item)">
                        Edit
                    </button>
                    <button class="mx-3 rounded-lg bg-red-600 hover:bg-red-700 text-white w-20"  @click="deletespecificuser(item.book_id)">
                        Delete
                    </button>
            </td>
            </tr>
        </table>
        </div>
          <!-- Category table  -->
          <div class="border-black border-2 m-8 p-8 flex justify-center">
          <table class="list">
            <tr>
                <th class="px-4 border-black rounded-lg border-4">Book Category Id</th>
                <th class="px-4 border-black rounded-lg border-4">Book Category Name</th>
            </tr>
            <tr v-for="(itemcategory) in statecategory.itemcategory"  :key="itemcategory">
              <td class="px-4 border-black rounded-lg border-4">{{itemcategory.bookcategory_id}}</td>
              <td class="px-4 border-black rounded-lg border-4">{{itemcategory.bookcategory_name}}</td>
            </tr>
        </table>
        </div>
    </div>
      </div>
</div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { alpha, numeric, required } from "@vuelidate/validators";
//import { required, minLength, book_id, sameAs, } from "@vuelidate/validators";
const formData = reactive ({
    book_id:"",
    book_name:"",
    book_author:"",
    book_price:"",
    book_image:"",
    book_isbn:"",
   // bookcategory_name:"",
    // addedone line extra as array
});
const formDatacategory=reactive({
  bookcategory_id: "",
  bookcategory_name: "",
})
const rules = {
    book_id:{ required,numeric},
    book_name:{ required,alpha},
    book_author:{ required,alpha },
    book_price:{ required,numeric },
    book_image:{ required,alpha },
    book_isbn:{ required,numeric },
   // bookcategory_name:{ required},
};
const rulescategory={
  bookcategory_id:{required,numeric},
  bookcategory_name:{required},
};
const v$ = useVuelidate(rules,formData)
let state = reactive({
  // allBooks: []
  items: [],
});
const vv$ = useVuelidate(rulescategory,formDatacategory)
let statecategory = reactive({
  itemcategory:[],
});
getalldata();
async function  getalldata(){
    state.items = await $fetch("http://localhost:3003/book");
}
getalldatacategory();
async function getalldatacategory(){
  statecategory.itemcategory=await $fetch("http://localhost:3003/bookcontroller");
}
// 2nd part
async function formSubmit() {
    const result = await v$.value.$validate();
    event.preventDefault();
    if(result)
    {
         alert("Book Successfully Added ");
    }
    else
    {
        alert(" please enter required fields..");
    }
  //console.log("we are in post", formData.book_id);
  const sampleData = {
    book_id: formData.book_id,
    book_name: formData.book_name,
    book_author:formData.book_author,
    book_price: formData.book_price,
    book_image: formData.book_image,
    book_isbn: formData.book_isbn,
    //bookcategory_name: formData.bookcategory_name,
  };
  const sampleDatacategory = {
    bookcategory_id: formDatacategory.bookcategory_id,
    bookcategory_name: formDatacategory.bookcategory_name,
  };
  console.log("sample ",sampleData);
  const response = await $fetch("http://localhost:3003/book", {
    method: "POST",
    body: JSON.stringify(sampleData),
    //  body: JSON.stringify(sampleDatacategory),
  }).then((res) =>{
 //console.log( alert("successfully done"));
  });
  getalldata();
  //getalldatacategory();
  clearData();
  //clearDatacategory();
const responsee = await $fetch("http://localhost:3003/bookController", {
    method: "POST",
    body: JSON.stringify(sampleDatacategory),
  }).then((res) =>{
 //console.log( alert("successfully done"));
  });
  getalldatacategory();
  clearDatacategory();
}
async function clearData() {
  formData.book_id = "";
  formData.book_name = "";
  formData.book_author = "";
  formData.book_price = "";
  formData.book_image = "";
  formData.book_isbn = "";
  //formData.bookcategory_name = "";
}
async function clearDatacategory() {
  formDatacategory.bookcategory_id="";
  formDatacategory.bookcategory_name="";
}
//Delete Api
async function deletespecificuser(book_id) {
  await $fetch("http://localhost:3003/book/" + book_id, {
    method: "DELETE",
  });
  getalldata();
}
async function editBook(book) {
  (formData.book_id = book.book_id),
  (formData.book_name = book.book_name),
  (formData.book_author= book.book_author),
  (formData.book_price = book.book_price),
  (formData.book_image = book.book_image),
  (formData.book_isbn = book.book_isbn);
  //(formData.bookcategory_name = book.bookcategory_name);
}
async function editBookApi(book) {
  // const response = await fetch("http://localhost:3001/book/" + this.book_id, {
  const response = await $fetch("http://localhost:3003/book/" + book_id.value, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      book_id: book_id.value,
      book_name: book_name.value,
      book_author: book_author.value,
      book_price: book_price.value,
      book_image: book_image.value,
      book_isbn: book_isbn.value,
      //bookcategory_name: bookcategory_name.value,
    }),
  });
  console.log(response);
  getalldata();
    //craeting for searing
    bookpro(bookName)
    {
        console.log(bookName);
        this.bookFound = this.formData.filter((e) => {
            if(e.book_name == bookName)
            {
                console.log(e);
                return e;
            }
        });
        console.log(this.bookFound);
    }
}
</script>