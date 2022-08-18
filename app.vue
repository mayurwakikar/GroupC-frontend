<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <div>
      <h1>Book Management Project Welcomes You !!</h1>
    </div>
    <div>
      <table>
        <form action="/">
          <tr>
            <td>Book Id</td>
            <td><input type="text" id="bookid"></td>
          </tr>
          <tr>
            <td>Book Name</td>
            <td><input type="text" id="bookname"></td>
          </tr>
          <tr>
            <td>Book Author</td>
            <td><input type="text" id="bookauthor"></td>
          </tr>
          <tr>
            <td>Book Price</td>
            <td><input type="number" id="bookprice"></td>
          </tr>
          <tr>
            <td >Book Image</td>
            <td><input type="text" id="bookimage"></td>
          </tr>
          <tr>
            <td>Book ISbn No.</td>
            <td><input type="number" id="bookisbn"></td>
          </tr>
          <tr>
            <td><button >Reset</button></td>
            <td><input type="text" id="bookid"></td>
          </tr>
        </form>
      </table>
    </div>
  </div>
</template>