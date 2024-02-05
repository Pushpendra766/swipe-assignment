# Swipe Assignment

Live Preview - [https://zepto766.netlify.app/](https://zepto766.netlify.app/)

>Note:- Some of the points provided in the assignment were a bit ambigious and were not making sense if we see from a real-world perspective, so I have made some assumptions, which are listed below.

### Assumptions
1. I have assumed that the products tab that you have talked is a tab where the merchant can maintain the products that he have, so that he can pick the products that a customer bought during invoice creation.
2. The word "product" and "item" are used interchangably when we consider "Product tab" and "Invoice Form" respectively. i.e. in Products tab, I called it products and when listing them in invoice I called them "items". Because in assignment they are mentioned as "products" but in assignment you called them "products".
3. Dynamic updation is done on these properties only - product name, product description, selling price.
3. Dynamic updation of product information is happening in two way :-
   a. When we change product in products tab, it will reflect in all invoices where that product appears.
   b. When we create new invoice and change the item info, it will reflect in all older invoices where that item appears and in the products tab.


### Setup Instructions

1.  Clone repository:
    ```bash
    git clone https://github.com/Pushpendra766/zepto-assignment.git
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
- [x] Create new product tab, where all the products are displayed and maintained through Redux.
- [x] Make product's editable in product tab.
- [x] Implement validation for any changes made in products tab and maintain data consistency through Redux.
- [x] If a product already used in previous invoices is edited, the updated details should reflect both in the 'Products' tab and in all existing invoices where it's used.
- [x] If a product is added to a new invoice with different values than the already stored values, update its details in the products tab and all invoices where it appears.
- [x] Make products tab and invoice creation intutive and clear.
- [x] Add grouping on products when invoice creation and invoice download.
- [x] Handle all the errors during invoice creation and provide appropriate feedback.
- [x] Maintain existing standards when creating new feature.
- [x] Create proper documentation.
- [x] Make the web-app responsive for all screen sizes.


Extras
- [x] Fix Redux error (Invoice data not updating when using invoice update feature)
- [ ] Write tests for all the new components.

