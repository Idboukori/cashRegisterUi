# CashRegisterUi

REST API that can do:  
1. Admin: Add a product (properties: barcode, name, cost, vat-class (6% or 21%))  
2. Admin: List all products  
3. Cash register: Get a product by barcode  
4. Cash register: Create a new receipt  
5. Cash register: Add a product by barcode to the receipt  
6. Cash register: Change the amount of the last product on the receipt  
7. Cash register: Finish a receipt  
8. Cash register: Get the receipt, including all product names grouped, amount of that product,
costs per row and total, and total vat per class

### `Running the project`
run : npm install  
run : ng serve  

For now to logout just remove the token from the browser Local Storage

```
-> to get access to manage product page you have to 
login as admin  

this should be the fist step to create products 
and list all your products then you can login with any
user to get products by barcode in the home page then 
create a receipt to add the choosen product to 
the receipt

```
