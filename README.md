# Swipe Assignment

Live Preview - [https://invoice-generator7.netlify.app/](https://invoice-generator7.netlify.app/)

## Demo
>Note:- GIF may take some time to load.

![](https://github.com/Pushpendra766/swipe-assignment/blob/main/src/assets/demo.gif)

### Assumptions
>Note:- Some of the points provided in the assignment were a bit ambiguous and were not making sense if we see them from a real-world perspective, so I have made some assumptions, which are listed below.
1. I have assumed that the products tab that you have talked about is a tab where the merchant can maintain the products that he has, so that he can pick the products that a customer bought during invoice creation.
2. The word "product" and "item" are used interchangeably when we consider "Product tab" and "Invoice Form" respectively. i.e. in the Products tab, I called it “product” and when listing them in invoice I called it "item". Because in the assignment they are mentioned as "products" but in the existing repository they were “items”.
3. Dynamic updation is done on these properties of products - product name, product description, selling price.
3. Dynamic updation of product information is happening in three ways :-
   a. When we change a product in the products tab, it will reflect in all invoices where that product appears.
   b. When we create a new invoice and change the item info, it will reflect in all older invoices where that item appears and in the products tab.
   c. When we update an existing invoice and change the item info, it will reflect in all older invoices where that item appears and in the products tab.
4.All the updation and creation of data is done via Redux,  so it is the single source of truth for the whole data flow.

### Setup Instructions

1.  Clone repository:
    ```bash
    git clone https://github.com/Pushpendra766/swipe-assignment.git
    ```
2.  Install
    ```bash
    npm install
    ```
3.  Run
    ```bash
    npm start
    ```

### Checklist of tasks 
- [x] Create a new product tab, where all the products are displayed and maintained through Redux.
- [x] Make product's editable in the product tab.
- [x] Implement validation for any changes made in the products tab and maintain data consistency through Redux.
- [x] If a product already used in previous invoices is edited, the updated details should reflect both in the 'Products' tab and in all existing invoices where it's used.
- [x] If a product is added to a new invoice with different values than the already stored values, update its details in the products tab and all invoices where it appears.
- [x] Make products tab and invoice creation intuitive and clear.
- [x] Add grouping on products when invoice creation and invoice download.
- [x] Handle all the errors during invoice creation and provide appropriate feedback.
- [x] Maintain existing standards when creating new features.
- [x] Create proper documentation.
- [x] Make the web-app responsive for all screen sizes.


Extras
- [x] Fix Redux error (Invoice data not updating when using invoice update feature)
- [ ] Write tests for all the new components.
