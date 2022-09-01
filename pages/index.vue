<template>
  <div>
    <h1 class="font-extrabold text-center text-5xl mt-8">Book Management System</h1> <br />
    <div>
      <div>
        <div class="text-center">

          <form method="post" class="flex justify-center bg-blue-300 px-12" autocomplete="off">
            <table>
              <div class="px-2">
                <label class="font-bold">Database Error</label>
                <hr /><br />
                <label>Book Id Error___________</label><br />
                <label>Book Name Error___________</label><br />
                <label>Book Author Error___________</label><br />
                <label>Book price Error___________</label><br />
                <label>Book Image Error___________</label><br />
                <label>Book ISBN Number Error___________</label><br />
              </div>
              <hr />
              <h2 class="text-teal-900 text-xl font-bold pt-6 text-center">Add a Book To Libaray</h2>
              <hr />
              <br />
              <label class="pt-10 py-10 mt-4" for="id">Book Id :- </label>
              <input type="number" id="id" name="id" placeholder="" v-model="formData.book_id"
                @change="validationId" /><br />
              <span class="text-sm text-red-500" v-for="error in v$.book_id.$errors" :key="error.$uid">{{ error.$message
              }}</span>
              <br /><br />

              <label for="book_name">Book Name:- </label>
              <input type="text" id="book_name" name="book_name" placeholder="" v-model="formData.book_name"
                @change="validationName" /><br />
              <span class="text-sm text-red-500" v-for="error in v$.book_name.$errors" :key="error.$uid">{{
                  error.$message
              }}</span>
              <br /><br />

              <label for="book_author">Book Author:- </label>
              <input type="text" id="book_author" name="book_author" placeholder="" v-model="formData.book_author"
                @change="validationAuthor"><br />
              <span class="text-sm text-red-500" v-for="error in v$.book_author.$errors" :key="error.$uid">{{
                  error.$message
              }}</span>
              <br><br>

              <label for="book_price">Book Price:- </label>
              <input type="number" id="book_price" name="book_price" placeholder="" v-model="formData.book_price"
                @change="validationPrice"><br />
              <span class="text-sm text-red-500" v-for="error in v$.book_price.$errors" :key="error.$uid">{{
                  error.$message
              }}</span>
              <br><br />

              <label for="book_image">Book Image:- </label>
              <input type="text" id="book_image" name="book_image" placeholder="" v-model="formData.book_image"
                @change="validationImage" /><br />
              <span class="text-sm text-red-500" v-for="error in v$.book_image.$errors" :key="error.$uid">{{
                  error.$message
              }}</span>
              <br /><br />

              <label for="book_isbn">Book ISbn:- </label>
              <input type="text" id="book_isbn" name="book_isbn" placeholder="" v-model="formData.book_isbn"
                @change="validationIsbn" /><br />
              <span class="text-sm text-red-500" v-for="error in v$.book_isbn.$errors" :key="error.$uid">{{
                  error.$message
              }}</span>
              <br /><br />

              <!-- <label for="bookcategory_name">Book category Name:- </label>
                <input type="text"  id="bookcategory_name" name="bookcategory_name" placeholder="" v-model="formData.bookcategory_name" @change="validationIsbn"/><br/>
                <span class="text-sm text-red-500"  v-for="error in v$.bookcategory_name.$errors" :key="error.$uid">{{error.$message}}</span>
                <br/><br/> -->
              <label for="selectbook">Book Categories :</label>
              <select name="selectbook" id="selectbook" multiple v-model="formData.book_select"
                @change="validationSelect" required>
                <option value="category">Select Book Category</option>
                <option value="novels">Novels</option>
                <option value="comics">Comics</option>
                <option value="scifi">Science Fiction</option>
                <option value="fantasy">Fantasy</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="detective">Detective</option>
                <option value="mystery">Mystery</option>
                <option value="education">Educational</option>
                <option value="history">Historical</option>
                <option value="geographical">Geographical</option>
                <option value="business">Business</option>
                <option value="enterpreneurship">Enterpreneurship</option>
                <option value="fitness">Body Fitness</option>
                <option value="food">Kitechen Food</option>
                <option value="spiritual">Spiritual</option>
              </select>
              <div class="mt-10">
                <button
                  class="py-1 px-5 mr-5 bg-black hover:bg-blue-400 text-white font-bold text-center rounded-md mb-3"
                  type="submit" @click="formSubmit">Add Book</button>
                <button
                  class="py-1 px-5 mr-3 bg-black hover:bg-blue-400 text-white font-bold text-center rounded-md mb-3"
                  type="reset">Reset</button>
                <button class="py-1 px-2 mx-3 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20"
                  @click="getalldata">
                  All Books
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
            <tr v-for="(item) in state.items" :key="item">
              <td class="px-4 border-black rounded-lg border-4">{{ item.book_id }}</td>
              <td class="px-4 border-black rounded-lg border-4">{{ item.book_name }}</td>
              <td class="px-4 border-black rounded-lg border-4">{{ item.book_author }}</td>
              <td class="px-4 border-black rounded-lg border-4">{{ item.book_price }}</td>
              <td class="px-4 border-black rounded-lg border-4">{{ item.book_image }}</td>
              <td class="px-4 border-black rounded-lg border-4">{{ item.book_isbn }}</td>
              <!-- <td class="px-4 border-black rounded-lg border-4">{{item.bookcategory_name}}</td> -->

              <!-- <td class="px-4 border-green-400 rounded-lg border-4">
                    <img src="{{item.Image}}" alt="" srcset="">
                </td> -->
              <td class="px-4 border-black rounded-lg border-4">{{ item.Action }}
                <button class="mx-3 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20" @click="editBook(item)">
                  Edit
                </button>
                <button class="mx-3 rounded-lg bg-red-600 hover:bg-red-700 text-white w-20"
                  @click="deletespecificuser(item.book_id)">
                  Delete
                </button>

              </td>
            </tr>
          </table>
        </div>
        <div class="border-black border-2 m-8 p-8 flex justify-center">
          <table class="list">
            <tr>
              <th class="px-4 border-black rounded-lg border-4">Book Id</th>
              <th class="px-4 border-black rounded-lg border-4">Book Category</th>
              <th class="px-4 border-black rounded-lg border-4">Action</th>
            </tr>
            <tr v-for="(item) in state.items" :key="item">
              <td class="px-4 border-black rounded-lg border-4">{{ item.bookcategory_id }}</td>
              <td class="px-4 border-black rounded-lg border-4">{{ item.book_category }}</td>
              <td class="px-4 border-black rounded-lg border-4">{{ item.Action }}
                <!-- <button class="mx-3 rounded-lg bg-green-600 hover:bg-green-600 text-white w-20" @click="editBook(item)">
                  Edit
                </button>
                <button class="mx-3 rounded-lg bg-red-600 hover:bg-red-700 text-white w-20"
                  @click="deletespecificuser(item.book_id)">
                  Delete
                </button> -->

              </td>
            </tr>
          </table>
        </div>
        <!-- search table  -->
        <!-- <div class="text-bold px-8">
                <label class="text-bold" for="searchbox">Search Books- </label>
                <input class=" border-black rounded-lg border-2" @keyup="bookFind(bookaddress)" v-model="this.bookaddress" type="text" name="searchbox" id="searchbox">
        </div>
        <div class="border-black border-2 m-8 p-8">
        <table class="list">
            <tr>
                <th class="px-4 border-black rounded-lg border-4">Book Id</th>
                <th class="px-4 border-black rounded-lg border-4">Book Name</th>
                <th class="px-4 border-black rounded-lg border-4">Book Author</th>
                <th class="px-4 border-black rounded-lg border-4">Book Image</th>
                <th class="px-4 border-black rounded-lg border-4">Book Price</th>
                 <th class="px-4 border-black rounded-lg border-4">Book ISbn</th>
                <th class="px-4 border-black rounded-lg border-4">Action</th>
            </tr>
            <tr v-for="(prod) in bookFound"  :key="prod">
                <td class="px-4 border-black rounded-lg border-4">{{prod.book_id}}</td>
                <td class="px-4 border-black rounded-lg border-4">{{prod.book_name}}</td>
                <td class="px-4 border-black rounded-lg border-4">{{prod.author}}</td>
                 <td class="px-4 border-black rounded-lg border-4">{{prod.price}}</td>
                <td class="px-4 border-black rounded-lg border-4">{{prod.book_image}}</td>
                <td class="px-4 border-black rounded-lg border-4">{{prod.book_isbn}}</td>
            </tr>
        </table>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { alpha, numeric, required } from "@vuelidate/validators";
//import { required, minLength, book_id, sameAs, } from "@vuelidate/validators";
const formData = reactive({
  book_id: "",
  book_name: "",
  book_author: "",
  book_price: "",
  book_image: "",
  book_isbn: "",
  book_select: "",
  //bookcategory_name:"",
  // addedone line extra as array
});
const categoryData = reactive({
  bookcategory_id: "",
  book_category: "",
});
const rules = {
  book_id: { required, numeric },
  book_name: { required, alpha },
  book_author: { required, alpha },
  book_price: { required, numeric },
  book_image: { required, alpha },
  book_isbn: { required, numeric },
  book_select: { required },
  //bookcategory_name:{ required},
};
const v$ = useVuelidate(rules, formData)
// const submitForm = async () => {
//     const result = await v$.value.$validate();
//     if(result)
//     {
//         alert("successfully done");
//     }
//     else
//     {
//         alert("form is not submitted");
//     }
//     alert("successfully , form is submitted");
// };
//import { ref } from "vue";
// how define multiple variable/ref in single reactive state
// Access in html template
// const book_id = ref("");
// const book_name = ref("");
// const book_author = ref("");
// const book_image = ref("");
// const book_price = ref("");
// const book_isbn = ref("");
let state = reactive({
  // allBooks: []
  items: [],
});
getalldata();
async function getalldata() {
  state.items = await $fetch("http://localhost:3003/book");
}
// 2nd part
async function formSubmit() {
  const result = await v$.value.$validate();
  event.preventDefault();
  if (result) {
    alert("Book Successfully Added ");
  }
  else {
    alert(" please enter required fields..");
  }
  //console.log("we are in post", formData.book_id);
  const sampleData = {
    book_id: formData.book_id,
    book_name: formData.book_name,
    book_author: formData.book_author,
    book_price: formData.book_price,
    book_image: formData.book_image,
    book_isbn: formData.book_isbn,
    book_select: formData.book_select,
    //bookcategory_name: formData.bookcategory_name,
  };
  console.log("sample ", sampleData);
  const response = await $fetch("http://localhost:3003/book", {
    method: "POST",
    body: JSON.stringify(sampleData),
  }).then((res) => {
    //console.log( alert("successfully done"));
  });
  getalldata();
  clearData();
}
async function clearData() {
  formData.book_id = "";
  formData.book_name = "";
  formData.book_author = "";
  formData.book_price = "";
  formData.book_image = "";
  formData.book_isbn = "";
  formData.book_select = "";
  //formData.bookcategory_name = "";
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
    (formData.book_author = book.book_author),
    (formData.book_price = book.book_price),
    (formData.book_image = book.book_image),
    (formData.book_isbn = book.book_isbn);
  (formData.book_select = book.book_select);
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
      book_select: book_select.value,
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
      if (e.book_name == bookName) {
        console.log(e);
        return e;
      }
    });
    console.log(this.bookFound);
  }
}
</script>